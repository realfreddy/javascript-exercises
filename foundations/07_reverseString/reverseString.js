const reverseString = function(word) {
    const arr = word.split('');
    arr.reverse();
    const reversed = arr.join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
