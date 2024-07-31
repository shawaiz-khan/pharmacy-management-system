#include <iostream>
#include <mysql.h>
#include <httplib.h>
#include <json.hpp>  // Include JSON library

using namespace std;
using json = nlohmann::json;

// MySQL connection details
const char HOST[] = "localhost";
const char USER[] = "root";
const char PASS[] = "admin";
const char DB[] = "pharma_db";

// Function to insert contact form data into the database
void insertContactFormData(MYSQL *conn, const string &name, const string &email, const string &message, bool sendCopy) {
    MYSQL_STMT *stmt;
    MYSQL_BIND bind[4];
    const char *query = "INSERT INTO contact_submissions (name, email, message, send_copy) VALUES (?, ?, ?, ?)";

    stmt = mysql_stmt_init(conn);
    if (!stmt) {
        cerr << "Failed to initialize statement: " << mysql_error(conn) << endl;
        return;
    }

    if (mysql_stmt_prepare(stmt, query, strlen(query))) {
        cerr << "Failed to prepare statement: " << mysql_stmt_error(stmt) << endl;
        mysql_stmt_close(stmt);
        return;
    }

    memset(bind, 0, sizeof(bind));

    // Bind name
    bind[0].buffer_type = MYSQL_TYPE_STRING;
    bind[0].buffer = (char *)name.c_str();
    bind[0].buffer_length = name.length() + 1;

    // Bind email
    bind[1].buffer_type = MYSQL_TYPE_STRING;
    bind[1].buffer = (char *)email.c_str();
    bind[1].buffer_length = email.length() + 1;

    // Bind message
    bind[2].buffer_type = MYSQL_TYPE_STRING;
    bind[2].buffer = (char *)message.c_str();
    bind[2].buffer_length = message.length() + 1;

    // Bind send_copy
    unsigned char sendCopyValue = sendCopy ? 1 : 0;
    bind[3].buffer_type = MYSQL_TYPE_TINY;
    bind[3].buffer = &sendCopyValue;
    bind[3].buffer_length = sizeof(sendCopyValue);

    if (mysql_stmt_bind_param(stmt, bind)) {
        cerr << "Failed to bind parameters: " << mysql_stmt_error(stmt) << endl;
        mysql_stmt_close(stmt);
        return;
    }

    if (mysql_stmt_execute(stmt)) {
        cerr << "Failed to execute statement: " << mysql_stmt_error(stmt) << endl;
    } else {
        cout << "Values added successfully" << endl;
    }

    mysql_stmt_close(stmt);
}

int main() {
    // Initialize MySQL connection
    MYSQL *conn = mysql_init(NULL);
    if (!conn) {
        cerr << "Failed to initialize MySQL: " << mysql_error(conn) << endl;
        return EXIT_FAILURE;
    }

    if (!mysql_real_connect(conn, HOST, USER, PASS, DB, 3306, NULL, 0)) {
        cerr << "Connection failed: " << mysql_error(conn) << endl;
        mysql_close(conn);
        return EXIT_FAILURE;
    }

    // Set up HTTP server
    httplib::Server svr;

    svr.Post("/contact", [&](const httplib::Request &req, httplib::Response &res) {
        // Parse JSON body
        try {
            auto jsonData = json::parse(req.body);
            string name = jsonData.at("name").get<string>();
            string email = jsonData.at("email").get<string>();
            string message = jsonData.at("message").get<string>();
            bool sendCopy = jsonData.at("sendCopy").get<bool>();

            // Insert data into the database
            insertContactFormData(conn, name, email, message, sendCopy);
            res.status = 200;
            res.set_content("Message sent successfully", "text/plain");
        } catch (const json::exception &e) {
            cerr << "JSON Parsing Error: " << e.what() << endl;
            res.status = 400;
            res.set_content("Invalid JSON format", "text/plain");
        } catch (const std::exception &e) {
            cerr << "Error: " << e.what() << endl;
            res.status = 400;
            res.set_content("Failed to process request", "text/plain");
        }
    });

    // Start server
    svr.listen("0.0.0.0", 8080);

    mysql_close(conn);
    return 0;
}

