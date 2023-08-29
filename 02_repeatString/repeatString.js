const repeatString = function (word, times) {
  let string = "";
  if (times == 0) {
    return "";
  } else if (times < 0) {
    return "ERROR";
  } else if (word == "") {
    return "";
  } else {
    for (var i = 0; i < times; i++) {
      string += word;
    }
  }

  return string;
};

// Do not edit below this line
module.exports = repeatString;
