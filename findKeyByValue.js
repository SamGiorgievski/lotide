const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  let key = undefined;
  for (let x in object) {

    if (object[x] === value) {
      key = x;
    }
  }

  return (key);
};


module.exports = findKeyByValue;

// testcases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
