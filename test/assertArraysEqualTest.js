const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(["hello", "world"], ["hello", "world"]); //meant to be true
assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world"]); //meant to be false