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