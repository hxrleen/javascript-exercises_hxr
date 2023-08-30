const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else {
    const arr = [1, 1];
    for (let i = 2; i < num; i++) {
      const element = arr[i - 1] + arr[i - 2];
      arr.push(element);
    }
    return arr[arr.length - 1];
  }
};

// Do not edit below this line
module.exports = fibonacci;
