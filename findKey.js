const assertEqual = require('./assertEqual');

//findkey

const findKey = function (object, callback) {
  for (let x in object) {
    if (callback(object[x])) {
      return x;
    }
  }
}

module.exports = findKey;

