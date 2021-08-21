module.exports = function reverse (n) {
    const num = Math.abs(n);
    return num.toString().split("").reverse().join("");
}     

    /*n = n + "";
    if (n >= 0) {
        return n.split("").reverse().join("");
    } else if (n < 0) {
        return -Math.abs(n)
    }
    */