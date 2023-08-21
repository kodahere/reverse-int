module.exports = function reverse (n) {
    if (n >= 0) {
        return (
            parseFloat(n.toString().split('').reverse().join(''))
            ) * Math.sign(n) 
    } else {
        return (
            parseFloat(n.toString().split('').reverse().join(''))
            ) * Math.sign(n) * -1
    }
}

