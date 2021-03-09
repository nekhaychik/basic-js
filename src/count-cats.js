const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '^^') count++;
    }
  }
  return count;
};
