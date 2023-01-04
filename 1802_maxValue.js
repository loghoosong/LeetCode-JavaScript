/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
    const bigAns = Math.max(index + 1, n - index);
    const smallAns = Math.min(index + 1, n - index);
    const delta = bigAns - smallAns;
    const bigSum = bigAns * bigAns - (delta * (delta + 1) >> 1);
    const smallSum = smallAns * smallAns + delta;

    if (maxSum >= bigSum) {
        return bigAns + Math.trunc((maxSum - bigSum) / n);
    } else if (maxSum <= smallSum) {
        return Math.trunc(Math.sqrt((maxSum - n))) + 1;
    } else {
        const step = smallAns + smallAns - 1;
        const b = 2 * step - 1;
        const c = (smallSum - maxSum) * 2;
        const n = Math.trunc((-b + Math.sqrt(b * b - 4 * c)) / 2);
        return smallAns + n;
    }
};