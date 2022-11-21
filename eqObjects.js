const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

// eqObjects
const eqObjects = function(object1, object2) {
  //same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }

  for (let x in object1) {

    if (Array.isArray(object1[x])) {

      if (!eqArrays(object1[x], object2[x])) {
        return false
      };

    } else if (object1[x] !== object2[x]) {
      return false
    }

  }
  return true
}

module.exports = eqObjects;