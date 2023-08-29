const reverseString = function (string) {
  let word = "";
  let num = string.length;
  let arr = string.split("");
  for (var i = num - 1; i >= 0; i--) {
    word = word + arr[i];
  }
  return word;
};

// Do not edit below this line
module.exports = reverseString;
