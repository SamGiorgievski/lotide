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


//testing with assertArraysEqual && eqArrays

//assertArraysEqual
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ 🌶 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ 🤌 Assertion Failed: ${array1} !== ${array2}`);
  }
}

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

// testing
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