/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let powerOfThree = 1;
    while (true) {
        if (n == powerOfThree) {
            return true;
        } else {
            if (powerOfThree > n) return false;
            powerOfThree *= 3;
        }
    }
};