const reverseString = function(text) {
    let textArray = text.split("");
    let reverseArray = textArray.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
