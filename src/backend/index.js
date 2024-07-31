/* eslint-disable no-undef */
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

// Import your routes
const authRoutes = require('./routes/auth');
const medicinesRoutes = require('./routes/medicines');
const transactionRoutes = require('./routes/transactions');
const salesRoutes = require('./routes/sales');

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
    cookie: { secure: false }
}));

// Use routes
app.use('/api/auth', authRoutes);
console.log('Auth routes set up');
app.use('/api/medicines', medicinesRoutes);
console.log('Medicines routes set up');
app.use('/api/transactions', transactionRoutes);
console.log('Transactions routes set up');
app.use('/api', salesRoutes);
console.log('Sales routes set up');

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
