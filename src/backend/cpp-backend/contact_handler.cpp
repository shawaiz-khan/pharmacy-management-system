#include <iostream>
#include <mysql.h>
#include <cstdlib> // for std::atoi

int main(int argc, char *argv[]) {
    if (argc < 4) {
        std::cerr << "Usage: " << argv[0] << " <name> <email> <message> [copy]" << std::endl;
        return 1;
    }

    const char* name = argv[1];
    const char* email = argv[2];
    const char* message = argv[3];
    int copy = argc > 4 ? std::atoi(argv[4]) : 0; // Convert to integer

    // Initialize MySQL connection
    MYSQL *conn;
    MYSQL_STMT *stmt;
    MYSQL_BIND bind[4];
    const char* query = "INSERT INTO contact_submissions (name, email, message, copy) VALUES (?, ?, ?, ?)";

    conn = mysql_init(NULL);
    if (conn == NULL) {
        std::cerr << "mysql_init() failed" << std::endl;
        return 1;
    }

    if (mysql_real_connect(conn, "localhost", "root", "admin", "pharma_db", 0, NULL, 0) == NULL) {
        std::cerr << "mysql_real_connect() failed: " << mysql_error(conn) << std::endl;
        mysql_close(conn);
        return 1;
    }

    stmt = mysql_stmt_init(conn);
    if (stmt == NULL) {
        std::cerr << "mysql_stmt_init() failed" << std::endl;
        mysql_close(conn);
        return 1;
    }

    if (mysql_stmt_prepare(stmt, query, strlen(query))) {
        std::cerr << "mysql_stmt_prepare() failed: " << mysql_stmt_error(stmt) << std::endl;
        mysql_stmt_close(stmt);
        mysql_close(conn);
        return 1;
    }

    memset(bind, 0, sizeof(bind));

    // Bind the parameters
    bind[0].buffer_type = MYSQL_TYPE_STRING;
    bind[0].buffer = (char *)name;
    bind[0].buffer_length = strlen(name);

    bind[1].buffer_type = MYSQL_TYPE_STRING;
    bind[1].buffer = (char *)email;
    bind[1].buffer_length = strlen(email);

    bind[2].buffer_type = MYSQL_TYPE_STRING;
    bind[2].buffer = (char *)message;
    bind[2].buffer_length = strlen(message);

    bind[3].buffer_type = MYSQL_TYPE_LONG; // Set as integer type
    bind[3].buffer = (char *)&copy;
    bind[3].buffer_length = sizeof(copy);

    if (mysql_stmt_bind_param(stmt, bind)) {
        std::cerr << "mysql_stmt_bind_param() failed: " << mysql_stmt_error(stmt) << std::endl;
        mysql_stmt_close(stmt);
        mysql_close(conn);
        return 1;
    }

    if (mysql_stmt_execute(stmt)) {
        std::cerr << "mysql_stmt_execute() failed: " << mysql_stmt_error(stmt) << std::endl;
        mysql_stmt_close(stmt);
        mysql_close(conn);
        return 1;
    }

    std::cout << "Message successfully inserted" << std::endl;

    mysql_stmt_close(stmt);
    mysql_close(conn);
    return 0;
}

