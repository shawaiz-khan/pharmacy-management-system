/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors'); // Import cors
const session = require('express-session'); // Import session
const app = express();
const port = 3000;

// Use cors middleware
app.use(cors({
    origin: 'http://localhost:5173', // Adjust according to your frontend port
    credentials: true // Allow credentials to be included in CORS requests
}));

// Middleware to parse JSON
app.use(express.json());

// Configure session middleware
app.use(session({
    secret: 'Shawaiz@0015', // Change this to a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Set to true if using https
        httpOnly: true,
        maxAge: 60000 // Session expiration time in milliseconds
    }
}));

// Define routes
app.use('/medicines', require('./routes/medicines'));
app.use('/api', require('./routes/login'));
app.use('/api', require('./routes/register'));
app.use('/api', require('./routes/auth')); // Add the auth route

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
