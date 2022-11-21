const findKey = require('../findKey');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

//test 1
console.log("Test 1:");

assertEqual("noma", findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

//test 2
console.log("Test 2:");

assertEqual("Hello", findKey({
  "Hi": 5,
  "Hey": 10,
  "Bye": 15,
  "Goodbye": 20,
  "Hello": 25,
  "NoTy": 30
}, x => x === 25))

//test 3 - undefined
console.log("Test 3:");

assertEqual(undefined, findKey({
  "Hi": 5,
  "Hey": 10,
  "Bye": 15,
  "Goodbye": 20,
  "Hello": 0,
  "NoTy": 30
}, x => x === 25))