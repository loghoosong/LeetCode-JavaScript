/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let str = n.toString();
    let numSet = new Set();
    numSet.add(n);
    while (true) {
        let squre = 0;
        for (let b of str) {
            squre += +b * +b;
        }
        if (squre == 1) return true;
        if (numSet.has(squre)) return false;
        numSet.add(squre)
        str = squre.toString();
    }
};