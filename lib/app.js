'use strict';

var express = require('express');
var app = express();
var iso = require('../portable');

console.log(iso.validateId('USER_12346'));

var server = require('http').createServer(app);
app.use('/', express.static(__dirname + '/../dist', {maxAge: 10000}));
server.listen(9000, () => console.log('App started ... '));

