const palindromes = function (string) {
  const cleanedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const len = cleanedString.length;
  let result = "";

  for (let i = len - 1; i >= 0; i--) {
    result += cleanedString[i];
  }

  return result === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
