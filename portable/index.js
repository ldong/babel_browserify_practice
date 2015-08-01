'use strict';

module.exports = {
  validateId,
  fib: fib()
};

const ID_PREFIX = 'USER_';

function validateId(id) {
  return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}

function* fib() {
  var n1 = 1;
  var n2 = 1;

  while(true){
    var current = n2;
    n2 = n1;
    n1 += current;
    var reset = yield current;
    if (reset){
      n1 = 1;
      n2 = 1;
    }
  }
}
