/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let minM = m;
    let minN = n;
    for (let op of ops) {
        minM = Math.min(op[0], minM);
        minN = Math.min(op[1], minN);
    }
    return minM * minN;
};