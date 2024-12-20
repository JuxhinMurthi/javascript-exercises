const removeFromArray = function() {
    const input = Array.from(arguments)
    let list = input[0]
    list = [...new Set(list)]

    for (const element of input.slice(1)){
        if (list.includes(element)) {
            list.splice(list.indexOf(element), 1)
        }
    }

    return list
};

// Do not edit below this line
module.exports = removeFromArray;
