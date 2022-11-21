const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


// letterPositions test
const results = letterPositions("lighthouse in the house");
console.log(results);

// assertArraysEqual test
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);