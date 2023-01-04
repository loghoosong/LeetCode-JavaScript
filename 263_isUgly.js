/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) return false;

    function iterator(num) {
        if (num == Math.trunc(num / 2) * 2) {
            return iterator(num / 2)
        }
        if (num == Math.trunc(num / 3) * 3) {
            return iterator(num / 3)
        }
        if (num == Math.trunc(num / 5) * 5) {
            return iterator(num / 5)
        }
        return num;
    }

    return iterator(n) == 1 ? true : false;
};