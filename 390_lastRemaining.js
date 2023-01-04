/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    let start = 1;
    let step = 1;
    while (n > 1) {
        n = Math.trunc(n / 2) * 2
        start = start + step * (n - 1);
        step *= -2;
        n = n / 2;
    }
    return start;
};

lastRemaining(9);