const removeFromArray = function(myArray, value) {
    let filteredArray = myArray.filter((item)=> item !== value )
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
