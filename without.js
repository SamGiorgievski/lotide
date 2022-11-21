const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove) {
  let newArray = []; // create new array
  for (let i=0; i<source.length; i++) {
    let shouldBePushed = true;
    for (let item of itemsToRemove) {
      if (source[i] === item) {
        shouldBePushed = false;
      }
    }
    if (shouldBePushed) {
      console.log(source[i]);
      newArray.push(source[i]);
    }
  }
  console.log(newArray);
}

module.exports = without;

without([1, 2, 3], [1, 2]);
without(["hi", "hey", "hello"], ["hello"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
