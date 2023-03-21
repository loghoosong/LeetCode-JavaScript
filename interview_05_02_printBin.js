/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
    let ans = '0.';
    for (let i = 1; i <= 32 && num !== 0; i++) {
        num *= 2;
        d = Math.trunc(num);
        num -= d;
        ans += d;
    }
    return num === 0 ? ans : 'ERROR';
};