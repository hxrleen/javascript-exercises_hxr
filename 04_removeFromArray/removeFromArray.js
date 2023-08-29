const removeFromArray = function (array, ...numsToRemove) {
  return array.filter((element) => !numsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
