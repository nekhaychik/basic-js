const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date)
    return 'Unable to determine the time of year!';
  checkDate = new Date();
  if(Object.prototype.toString.call(date) != Object.prototype.toString.call(checkDate))
    throw new Error("Tricky error");



  let result = "";
  let month = date.getMonth();
  if(month >= 0 && month <= 1 || month == 11)
    result =  "winter";
  if(month >= 2 && month <= 4)
    result =  "spring";
  if(month >= 5 && month <= 7)
    result =  "summer";
  if(month >= 8 && month <=10 )
    result = "autumn";
  return result;
};
