/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let digits = new Array(32).fill(0);
    let i = 0;
    while (n > 0) {
        digits[i] = n & 1;
        n = Math.trunc(n / 2);
        i++;
    }

    for (let i = 0; i < 32; i++) {
        n = n * 2 + digits[i];
    }
    return n;
};