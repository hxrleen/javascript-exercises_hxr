const sumAll = function (i, j) {
  var sum = 0;
  if (i < 0 || j < 0 || typeof (i, j) !== "number") {
    return "ERROR";
  } else if (i > j) {
    for (var num = j; num <= i; num++) {
      sum += num;
    }
    return sum;
  } else {
    for (var num = i; num <= j; num++) {
      sum += num;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
