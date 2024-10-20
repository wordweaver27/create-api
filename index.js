const express = require('express')
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const dotenv = require('dotenv')

dotenv.config(); 

const app = express();

const MONGODB_URI = process.env.MONGODB_URI; 

app.get('/', (req, res) => {
    res.send('Hello from the API, Updated')
})

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });