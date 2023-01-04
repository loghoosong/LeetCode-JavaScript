/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let powerOfTwo = 1;
    let counter = 0;
    while (counter < 31) {
        if (n == powerOfTwo) return true;
        counter++;
        powerOfTwo <<= 1;
    }
    return false;
};