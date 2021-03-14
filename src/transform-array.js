const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array))
    throw Error("wrong type!");
  let controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let res = [];
  
  arr.forEach((el, i) => {
    notControl = !controls.includes(el);
    notDiscardBefore = (!arr[i - 1] || arr[i - 1] != '--discard-next');
    notDiscardAfter = (!arr[i + 1] || arr[i + 1] != '--discard-prev');
    isDoubleAfter = (arr[i + 1] && arr[i + 1] == '--double-prev');
    isDoubleBefore = (arr[i - 1] && arr[i - 1] == '--double-next');

    if (notControl) {
      if ((notDiscardBefore && notDiscardAfter) || (isDoubleBefore && !notDiscardAfter))
        res.push(el);
    }
    if (isDoubleAfter && notDiscardBefore)
      res.push(el);
    if (isDoubleBefore && notDiscardAfter)
      res.push(el);
  });

  return res;
};
