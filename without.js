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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ 🌶 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ 🤌 Assertion Failed: ${array1} !== ${array2}`);
  }
}

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

without([1, 2, 3], [1, 2]);
without(["hi", "hey", "hello"], ["hello"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
