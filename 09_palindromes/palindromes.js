const palindromes = function (str) {
 // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
 let regEx = /[\W_]/g; //or let regEx = /[^A-Za-z0-9]/g;
 let lowStr = str.toLowerCase().replace(regEx, "");
 // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase()
 // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
 // let lowStr = "amanaplanacanalpanama";
 let reverseStr = lowStr.split("").reverse().join("");
 // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
 // And, let reverseStr = "amanaplanacanalpanama";

 // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
 return lowStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
