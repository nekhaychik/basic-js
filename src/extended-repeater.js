const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = "";
  if(!options.separator)
    options.separator = '+';
  if(!options.additionSeparator)
    options.additionSeparator = '|';

  if(!options.repeatTimes)
    options.repeatTimes = 1;
  if(!options.additionRepeatTimes)
    options.additionRepeatTimes = 1;

  if(options.hasOwnProperty('addition')){
    if(options.addition == null) options.addition = 'null';
    else options.addition = options.addition.toString();
    str += (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length);
  }
  str += options.separator;
  result = str.repeat(options.repeatTimes).slice(0,-options.separator.length)
  return result;
};
  