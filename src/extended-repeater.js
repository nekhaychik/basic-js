const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = String(str)

  if (!options.separator)
      options.separator = '+';

  if (!options.additionSeparator)
      options.additionSeparator = '|';
  
  let additionBuffer = options.addition ? options.addition : '';
  if (options.additionRepeatTimes) {
      if (options.additionSeparator) {
          additionBuffer = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
          additionBuffer = additionBuffer.slice(0, additionBuffer.length - options.additionSeparator.length);
      }
  }

  let result = str + (options.addition ? options.addition : '');
  if (options.repeatTimes) {
      if (options.separator) {
          result = (str + additionBuffer + options.separator).repeat(options.repeatTimes);
          result = result.slice(0, result.length - options.separator.length);
      }
  }

  return result;
};
  