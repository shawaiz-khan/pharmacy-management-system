/* eslint-disable no-undef */
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// Import your routes
const authRoutes = require('./routes/auth'); // Adjust path as necessary
const medicinesRoutes = require('./routes/medicines'); // Adjust path as necessary
const transactionsRouter = require('./routes/transactions'); // Adjust path as necessary

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
}));
app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true with HTTPS in production
}));

// Use routes
app.use('/api/auth', authRoutes);
console.log('Auth routes set up');
app.use('/api/medicines', medicinesRoutes);
console.log('Medicines routes set up');
app.use('/api/transactions', transactionsRouter);
console.log('Transactions routes set up');

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
