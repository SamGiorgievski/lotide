//eqArrays
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  
  for (let i=0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    } 
  }
  return true
}

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


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ 🌶 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ 🤌 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//test

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => T

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => F

module.exports = assertObjectsEqual;