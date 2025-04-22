const reverseString = function(str) {
let splitString = str.split("");
let reversedString = splitString.reverse();
let joinArray = reversedString.join("");
return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
