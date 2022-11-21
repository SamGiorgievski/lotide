const tail = function(x) {
  let array = [];
  for (let i = 1; i < x.length; i++) {
    array.push(x[i]);
  }
  return array;
};

module.exports = tail;


