/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    const sqrt = Math.trunc(Math.sqrt(c));
    for (let i = sqrt; i >= 0; i--) {
        let delta = c - i * i;
        if (Math.pow(Math.trunc(Math.sqrt(delta)), 2) == delta) return true;
    }
    return false;
};