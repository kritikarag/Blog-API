const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const connectDB = require('./db');
require('dotenv').config();
connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
 
module.exports = app;