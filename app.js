/**
 * Created by artwe on 12/06/2017.
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to mongodb
mongoose.connect(config.database);

//check if connected
mongoose.connection.on('connected', function () {
    console.log("Connected to database "+config.database);
})

//initialize express
const app = express();

//user route
const users = require('./routes/users');

//server listening port
const port = 5000;

//some middleware
app.use(cors()); // allow request from any domain

//set static folder
app.use(express.static(path.join(__dirname, 'public'))); // loads when '/' is requested

//bodyParser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//users route
app.use('/users',users);

//Index Route
app.get('/', function (req, res) {
    res.send("Imran Artwel Jnr");
})


app.listen(port, function () {

 console.log("Server Running on port "+port);
});


