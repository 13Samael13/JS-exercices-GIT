var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');//

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/hotels');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// chrecher fichier dans repertoire public

app.use('/', indexRouter);
app.use('/hotels', usersRouter);

module.exports = app;
