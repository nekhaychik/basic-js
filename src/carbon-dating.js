const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  let num = parseFloat(str);

  if (typeof(str) != "string" || isNaN(num) || num <= 0 || num > MODERN_ACTIVITY)
      return false;

  let a =  MODERN_ACTIVITY / num;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(a) / k;
  
  return Math.ceil(t);
};
