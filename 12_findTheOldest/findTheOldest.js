const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear()
    arr.sort((a, b) => {
        if (!a.yearOfDeath || !b.yearOfDeath) {
            a.yearLived = currentYear - a.yearOfBirth
            b.yearLived = currentYear - b.yearOfBirth
        } else {
            a.yearLived = a.yearOfDeath - a.yearOfBirth
            b.yearLived = b.yearOfDeath - b.yearOfBirth
        }
        return b.yearLived - a.yearLived
    })
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
