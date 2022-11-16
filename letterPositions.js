// eqArrays and assertArraysEquals

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ 🌶 Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌ 🤌 Assertion Failed: ${array1} !== ${array2}`);
  }
};


// letterPositions

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence.charAt(i);
    
    if (!results[letter] && letter !== " ") {
      results[letter] = [];
    }

    results[letter].push(i);
  }

  return(results);
};

// letterPositions test
const results = letterPositions("lighthouse in the house");
console.log(results);

// assertArraysEqual test
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);