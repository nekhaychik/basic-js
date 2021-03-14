const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      if (depth == 0) depth++;
      let addDepth = 0;
      arr.forEach(el => {
        if (Array.isArray(el)) {
          let buffDepth = this.calculateDepth(el);
          if (buffDepth > addDepth) addDepth = buffDepth;
        }
      });
      depth += addDepth;
    }
    return depth;
  }
};