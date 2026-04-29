const removeFromArray = function(array, ...valuesToRemove) {
    let newArray = array.slice();

    for (const valueToRemove of valuesToRemove)
    {
        newArray = newArray.filter(value => value !== valueToRemove);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
