const rounded = number => Math.round(number * 10)/10;

const convertToCelsius = function(degree) {
  converted = (degree - 32) * (5/9);
  return rounded(converted)
};

const convertToFahrenheit = function(degree) {
  converted = degree * (9/5) + 32;
  return rounded(converted)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
