const palindromes = function (string) {
    let lowerCased = string.toLowerCase()
    let charOnly = lowerCased.replace(/[^\w]|/g, "")
    
    return charOnly === charOnly.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
