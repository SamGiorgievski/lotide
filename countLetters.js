const assertEqual = require('./assertEqual');

// countLetters
const countLetters = function(string) {
var newString = string.toLowerCase();
var newObject = {};
for (let letter of newString) { // loop through string
  if (newObject[letter]) {
    newObject[letter] += 1; // if existing letter, add 1 to value
  } else {
    newObject[letter] = 1; // if new letter, create a key and set value to 1
  }
}
console.log(JSON.stringify(newObject));
}

module.exports = countLetters;

// test cases
countLetters("Hello!");
countLetters("HeYYYYyyyyy hiIIIii hEllooo");