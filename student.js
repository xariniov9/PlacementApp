var express = require('express');
var restful = require('node-restful');
var mongoose = require('mongoose');
const winston = require('winston');

var db = mongoose.connect('mongodb://xariniov9:hellomoto@ds115701.mlab.com:15701/sampledb', function(){
	winston.log('info', 'Hello!', {  
  		database: 'Connected to database for student schema!'
	})
});

var studentSchema = new mongoose.Schema({
	name: String,
	department: String,
	rollno: Number,
	cgpa: Number
});
module.exports = restful.model('tblstudent', studentSchema);
