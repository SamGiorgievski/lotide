// assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🌶 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ 🤌 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 0);

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

// test cases
countLetters("Hello!");
countLetters("HeYYYYyyyyy hiIIIii hEllooo");