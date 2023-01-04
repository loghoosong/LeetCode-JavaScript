/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) return 1;
    function myArray(num) {
        let ans = 9;
        for (let i = 0; i < num; i++) {
            ans *= (9 - i);
        }
        return ans;
    }
    return countNumbersWithUniqueDigits(n - 1) + myArray(n - 1);
};