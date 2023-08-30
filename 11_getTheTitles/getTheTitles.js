const getTheTitles = function (books) {
  let newarr = [];
  for (let i = 0; i < books.length; i++) {
    newarr.push(books[i].title);
  }
  return newarr;
};

// Do not edit below this line
module.exports = getTheTitles;
