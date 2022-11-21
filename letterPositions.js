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

