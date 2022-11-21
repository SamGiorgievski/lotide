const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


//tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ab)); // T
console.log(eqObjects(ab, ba)); // T

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => T

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => F


module.exports = eqObjects;