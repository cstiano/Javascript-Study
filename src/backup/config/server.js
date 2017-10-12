//Importing modules required
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

// Init the express 
var app = express();

// Seting views 
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configure the middleware express.static
app.use(express.static('./app/public'));

// Configure the middleware body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

consign()
	.include('app/routes')
	.include('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;