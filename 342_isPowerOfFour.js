/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) return false;
    while (true) {
        if (n == 1) return true;
        if (n % 4 == 0) {
            n /= 4;
        } else {
            return false;
        }

    }
};