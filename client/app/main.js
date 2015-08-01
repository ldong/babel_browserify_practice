'use strict';

require('babel/polyfill');
var utils = require('./utils');
var iso = require('../../portable');
var fib = iso.fib;

console.log('Client side code started');
console.log(iso.validateId('USER_1231241'));

// utils.count();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
