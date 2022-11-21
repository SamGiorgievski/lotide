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

//tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ab)); // T
console.log(eqObjects(ab, ba)); // T

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => T

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => F


module.exports = eqObjects;