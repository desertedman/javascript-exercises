const reverseString = function(str) {
  let ret = "";

  for (let i = str.length - 1; i >= 0; i--) {
    ret += str[i];
  }

  return ret;
};

// Do not edit below this line
module.exports = reverseString;
