// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todo = require('./routes/todos.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url ='mongodb://kasapov.exceedteam:PKutgfhl1995@ds131983.mlab.com:31983/todos-database';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todos', todo);

let port = 3030;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});







// let dev_db_url = 'mongodb://someuser:abcd1234@ds127961.mlab.com:27961/productstutorial';