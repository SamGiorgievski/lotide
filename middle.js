const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

// ACTUAL FUNCTION
const middle = function(array) {
  let newArray = [];
  if (array.length >=3 && array.length % 2 === 0) { // if array has 1 or 2, return empty // if array >=3 then perform an action
    let num1 = array.length/2-1;
    let num2 = array.length/2;
    newArray.push(array[num1]);
    newArray.push(array[num2]);
    // if array is even, return 2 numbers
  } else if (array.length >=3 && array.length % 2 === 1) {
    let num = array.length/2-0.5;
    newArray.push(array[num]);
// if array is odd, return 1 numbers
  }
return(newArray); //return array, if array < 2 then return blank array
}

module.exports = middle;