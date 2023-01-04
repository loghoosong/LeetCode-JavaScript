/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let count = 0;
    function countOne(num) {
        let re = 0;
        let base = 1;
        for (let i = 0; i <= 20; i++) {
            if ((num & base) == base) re++;
            base <<= 1;
        }
        return re;
    }

    const primesSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);

    for (let i = left; i <= right; i++) {
        let c = countOne(i);
        if (primesSet.has(c)) count++;
    }
    return count;
};