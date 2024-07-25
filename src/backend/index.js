/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());

// Other middleware and routes
app.use(express.json());
app.use('/medicines', require('./routes/medicines'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
