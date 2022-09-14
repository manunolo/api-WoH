var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var adminRouter = require('./routes/admin');
var jugadoresRouter = require('./routes/jugadores');
var indexRouter = require('./routes/index');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/jugadores', jugadoresRouter);

module.exports = app;
