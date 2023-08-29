const convertToCelsius = function (fahrenheit) {
  var f = parseInt(fahrenheit);
  var c = (f - 32) * (5 / 9);
  var c = Math.round(c * 10) / 10;
  return c;
};

const convertToFahrenheit = function (celsius) {
  var c = parseFloat(celsius);
  var f = parseFloat((9 / 5) * c + 32);
  var f = Math.round(f * 10) / 10;

  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
