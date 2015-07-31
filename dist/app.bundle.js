(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var iso = require('../../portable');

console.log('Client side code started');
console.log(iso.validateId('USER_1231241'));

utils.count();

},{"../../portable":3,"./utils":2}],2:[function(require,module,exports){
'use strict';

module.exports = {
  count: count
};

function count() {
  var count = 0;
  setInterval(function () {
    return console.log(count++);
  }, 400);
}

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  validateId: validateId
};

var ID_PREFIX = 'USER_';

function validateId(id) {
  return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbGRvbmcvRG9jdW1lbnRzL0Rldi9iYWJlbC1zdGFydGVyL2NsaWVudC9hcHAvbWFpbi5qcyIsIi9Vc2Vycy9sZG9uZy9Eb2N1bWVudHMvRGV2L2JhYmVsLXN0YXJ0ZXIvY2xpZW50L2FwcC91dGlscy9pbmRleC5qcyIsIi9Vc2Vycy9sZG9uZy9Eb2N1bWVudHMvRGV2L2JhYmVsLXN0YXJ0ZXIvcG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7O0FBRTVDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7O0FDUmQsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixPQUFLLEVBQUwsS0FBSztDQUNOLENBQUM7O0FBRUYsU0FBUyxLQUFLLEdBQUU7QUFDZCxNQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxhQUFXLENBQUM7V0FBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0dBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUU5Qzs7O0FDVkQsWUFBWSxDQUFDOztBQUViLE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixZQUFVLEVBQVYsVUFBVTtDQUNYLENBQUM7O0FBRUYsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDOztBQUUxQixTQUFTLFVBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDdEIsU0FBTyxPQUFPLEVBQUUsSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDN0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgaXNvID0gcmVxdWlyZSgnLi4vLi4vcG9ydGFibGUnKTtcblxuY29uc29sZS5sb2coJ0NsaWVudCBzaWRlIGNvZGUgc3RhcnRlZCcpO1xuY29uc29sZS5sb2coaXNvLnZhbGlkYXRlSWQoJ1VTRVJfMTIzMTI0MScpKTtcblxudXRpbHMuY291bnQoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvdW50XG59O1xuXG5mdW5jdGlvbiBjb3VudCgpe1xuICB2YXIgY291bnQgPSAwO1xuICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcblxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmFsaWRhdGVJZFxufTtcblxuY29uc3QgSURfUFJFRklYID0gJ1VTRVJfJztcblxuZnVuY3Rpb24gdmFsaWRhdGVJZChpZCkge1xuICByZXR1cm4gdHlwZW9mIGlkID09ICdzdHJpbmcnICYmIGlkLmluZGV4T2YoSURfUFJFRklYKSA9PT0gMDtcbn1cbiJdfQ==
