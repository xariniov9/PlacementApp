var express = require('express');
var restful = require('node-restful');
var mongoose = require('mongoose');

const winston = require('winston');

var db = mongoose.createConnection('mongodb://xariniov9:hellomoto@ds115701.mlab.com:15701/sampledb', function(){
	winston.log('info', 'Hello!', {  
  		database: 'Connected to database for company schema!'
	})
});
var companySchema = new mongoose.Schema({
	name : String,
	package : Number,
	requiredCGPA: Number,
	registeredStudents: [{type : mongoose.Schema.Types.ObjectId, ref: 'tblstudent'}]
});

module.exports = restful.model('tblcompany', companySchema);