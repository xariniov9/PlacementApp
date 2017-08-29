var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const winston = require('winston');

var db = mongoose.createConnection('mongodb://xariniov9:hellomoto@ds115701.mlab.com:15701/sampledb', function(){
	winston.log('info', 'Hello!', {  
  		database: 'Connected to database!'
	})
});

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Routes
app.use('/api', require('./api'));

app.listen(3000, function(){
	winston.log('info', 'Hello!', {  
  		server: 'Listening on port 3000!'
	})
});

