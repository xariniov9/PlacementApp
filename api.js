var express = require('express');
var router = express.Router();
var student = require('./student');
var company = require('./company');
var bodyParser = require('body-parser');
const winston = require('winston');
const errorlog = require('./util/logger').errorlog;
const successlog = require('./util/logger').successlog;

var check = require('validator').check;

student.methods(['get', 'put', 'post', 'delete']);
student.register(router, '/student');

student.before('post', validateStudent)
	.before('put', validateStudent);

function validateStudent(req, res, next){
	check(''+req.body.rollno).isInt;
	check(''+req.body.cgpa).isDecimal;
}

company.methods(['get', 'put', 'post', 'delete']);
company.register(router, '/company');

company.before('post', validateCompany)

function validateCompany(req, res, next){
	check(''+req.body.package).isDecimal;
	check(''+req.body.requiredCGPA).isDecimal;
}

successlog.info('Request Is Successfully made and data is saved Successfully');
errorlog.error('Error!! Please check the parameters');

module.exports = router;
