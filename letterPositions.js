const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// letterPositions

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence.charAt(i);
    
    if (!results[letter]) {
      results[letter] = [];
    }
    
    results[letter].push(i);
  }

  return(results);
};

module.exports = letterPositions;

// letterPositions test
const results = letterPositions("lighthouse in the house");
console.log(results);

// assertArraysEqual test
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);