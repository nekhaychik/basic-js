const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if(typeof str != 'string' || str === undefined || str.length == 0)
  return false;
  
  let n = +str;

  if(isNaN(n) || typeof n != 'number')
    return false;
  if(n >= 9000 || n <= 0)
    return false;
  if(Math.trunc(n) != n && Math.trunc(n) >= 15)
    return false;

  let result = Math.log(MODERN_ACTIVITY/n)/HALF_LIFE_PERIOD*Math.log(2);
  return result;
};
