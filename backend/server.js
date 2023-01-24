const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

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

const homeRouter = require('./routes/home');
const resultsRouter = require('./routes/results');
const searchRouter = require('./routes/search');

app.use('/', homeRouter);
app.use('/results', resultsRouter);
app.use('/search', searchRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});