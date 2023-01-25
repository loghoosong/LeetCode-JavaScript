/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    const half = num >> 1;
    if ((num & 1) === 1) return half;

    let n = 0;
    while (num > 0) {
        n ^= num & 1;
        num = Math.trunc(num / 10);
    }
    return half - n;
};
