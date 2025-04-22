const removeFromArray = function(myArray, ...values) {
    let filteredArray = myArray.filter((item)=> !values.includes(item) );
    return filteredArray;
};
//removeFromArray([1, 2, 3, 4], 3, 2)
//[1, 2, 3, 4], 7, "tacos")
// Should return [1, 4]
//If the item is included → we don't want it.
//If the item is NOT included → we want to keep it.

// Do not edit below this line
module.exports = removeFromArray;
