const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  let key = undefined;
  for (let x in object) {

    if (object[x] === value) {
      key = x;
    }
  }

  return (key);
};


module.exports = findKeyByValue;

