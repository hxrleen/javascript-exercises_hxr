const add = function (a, b) {
  var result = parseInt(a) + parseInt(b);
  return result;
};

const subtract = function (a, b) {
  var result = parseInt(a) - parseInt(b);
  return result;
};

const sum = function (arr) {
  var result = 0;
  for (i = 0; i < arr.length; i++) {
    result += parseFloat(arr[i]);
  }
  return result;
};

const multiply = function (arr) {
  var sum = 1;
  for (var i = 0; i < arr.length; i++) {
    sum = sum * parseInt(arr[i]);
  }
  return sum;
};

const power = function (a, b) {
  var result = parseInt(a ** b);
  return result;
};

const factorial = function (num) {
  var i;
  var sum = 1;

  for (i = 1; i <= parseInt(num); i++) {
    sum = parseInt(sum * i);
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
