const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

// TEST CODE
middle([1, 2])
middle([1, 2, 3]) // odd
middle([1, 2, 3, 4, 5]) // odd
middle([1, 2, 3, 4]) // even
middle([1, 2, 3, 4, 5, 6]) // even


assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), middle([1, 2, 3, 4, 5, 6, 7]));