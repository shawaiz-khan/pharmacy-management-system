/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const medicinesRoutes = require('./routes/medicines');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use the medicines routes
app.use('/medicines', medicinesRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
