const palindromes = function (string) {
    let lowerCased = string.toLowerCase()
    let cleanedString = lowerCased.replace(/[^\w]|/g, "")
    let reversedString = cleanedString.split('').reverse().join('')
    
    return cleanedString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
