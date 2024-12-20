const sumAll = function() {
    let elements = [...new Set(arguments)].sort()
    let count = 0

    for (const element of elements) {
        if (typeof element !== "number" || element !== Math.floor(element) || element < 0) {
            return "ERROR"
        }
    }

    for (let i = elements[0]; i <= elements[1]; i++) {
        count = count + i;
    }

    return count
};

// Do not edit below this line
module.exports = sumAll;
