const takeUntil = function(array, callback) {
  let returnArray = [];

  for (let y of array) {

    if (callback(y)) {
      return returnArray;
    }

    returnArray.push(y);
  }
  
  return returnArray;
}

module.exports = takeUntil;

