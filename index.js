const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// CONNECTING DB
connectDb();

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});

app.use(express.json());
app.use('/api/contacts', require('./routes/contacts'));
app.use(errorHandler);
