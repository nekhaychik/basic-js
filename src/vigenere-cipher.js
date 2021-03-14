const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool){
    if(bool === true)
    this.direct = true;
    else if(bool === false)
    this.direct = false;
    else
    this.direct = true;
  }
  _algorithm(str,key,mode){
    
    str = str.toUpperCase();
    key = key.toUpperCase();
    
    let newKey = key.repeat(Math.ceil(str.length / key.length)).substring(0, str.length);
    str.split("").forEach((ch, i) => {
      if (ch != ch.match(/[a-z]/i))
      newKey = [newKey.slice(0, i), ch, newKey.slice(i)].join('');
    });
    newKey = newKey.substring(0, str.length);
    
    let res = "";
    let addition = 0;
    let sign = 1;

    switch(mode){
      // Encrypt
      case 1:
        addition = -65*2;
        sign = 1;
        break;
      // Decrypt
      case 0:
        addition = 26;
        sign = -1;
        break;
      default:
        throw new Error;
    }
    for (let i = 0; i < str.length; i++) {
      if (newKey[i] != newKey[i].match(/[a-z]/i)){
        res += newKey[i];
      } else {
        res += String.fromCharCode((sign*newKey.charCodeAt(i) + str.charCodeAt(i) + addition)%26 + 65);
      }
    }
    return this.direct? res : res.split("").reverse().join("");
  }
  
  encrypt(str, key) {
    return this._algorithm(str,key,1);
  }
    
  decrypt(str,key) {
   return this._algorithm(str,key,0);
  }
}

module.exports = VigenereCipheringMachine;
