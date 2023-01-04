/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
    const BASE = 1337;
    function pow(x, y) {
        let re = 1;
        while (y > 0) {
            re = (re * x) % BASE;
            y--;
        }
        return re;
    }
    a = a % BASE;
    return b.reduce((ans, item) => pow(ans, 10) * pow(a, item) % BASE, 1);
};