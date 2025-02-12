const fibonacci = function(x) {
    const num = Number(x)
    if (num < 0) {
        return "OOPS"
    } else if (num === 0) {
        return 0
    } else {
        const fibonacci = []
        for (let i = 0; i < num; i++) {
            if (i === 0 || i === 1) {
                let n = 1
                fibonacci.push(n)
            } else {
                let n = fibonacci[(i - 1)] + fibonacci[(i - 2)]
                fibonacci.push(n)
            }
        }
        return fibonacci.at(-1)
    }
};

// Do not edit below this line
module.exports = fibonacci;
