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

assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world"]);