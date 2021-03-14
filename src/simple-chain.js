const CustomError = require("../extensions/custom-error");

const chainMaker = {
  elements: [],
  getLength() {
    return this.elements.length;
  },
  addLink(value) {
    if(value == null)
      this.elements.push('null');
    else{
      value = value.toString();
      this.elements.push(value);
    }
  return this;
},
removeLink(position) {
  
  if (this.elements[position-1]) {
    this.elements.splice((position-1),1);    
  } else {
    this.elements = [];
    throw Error;
  }
    return this;
},
reverseChain() {
  if (this.length != 0) {
    this.elements.reverse();
  }
  return this;
  
},
finishChain() {
  let str = "";
  this.elements.forEach((el,i)=>{
    i == 0 ? str += `( ${el} )` : str += `~~( ${el} )`;
  })
  this.elements = [];
  return str;
}
};

module.exports = chainMaker;
