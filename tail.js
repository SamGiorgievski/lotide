const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ 🌶 Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ 🤌 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 0);

const tail = function(x) {
  let array = [];
  for (let i = 1; i < x.length; i++) {
    array.push(x[i]);
  }
  return array;
};

console.log(tail([3, 4, 5]));

//TEST CASE
const result = tail(["Hello", "Lighthouse", "Labs"]);// creating a new var to hold the array makes it easier to call in a test case!
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
assertEqual(result[0], "Labs")
