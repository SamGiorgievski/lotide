const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

module.exports = map;

//testing with assertArraysEqual && eqArrays
// test 1

console.log("test 1:");
const words3 = ["ground", "control", "to", "major", "tom"];
const words4 = ["glad", "calculator", "tomorrow", "moo", "telephone"];
const results3 = map(words3, word => word[0]);
const results4 = map(words4, word => word[0]);
assertArraysEqual(results3, results4);

// test 2
console.log("test 2:");
const numbers1 = [10, 20, 30];
const results5 = map(numbers1, word => word*2);
assertArraysEqual([20, 40, 60], results5);

// test 3
console.log("test 3:");
array1 = [10, 20]
const results6 = map(array1, word => !word)
assertArraysEqual([false, false], results6);