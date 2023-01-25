const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')

const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('strictQuery', false)
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const resumeRouter = require('./routes/resume');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/resume', resumeRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});