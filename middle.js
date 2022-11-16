// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  for (let i=0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    } 
  }
  return true
}


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ 🌶 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ 🤌 Assertion Failed: ${array1} !== ${array2}`);
  }
}

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

// TEST CODE
middle([1, 2])
middle([1, 2, 3]) // odd
middle([1, 2, 3, 4, 5]) // odd
middle([1, 2, 3, 4]) // even
middle([1, 2, 3, 4, 5, 6]) // even


assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), middle([1, 2, 3, 4, 5, 6, 7]));