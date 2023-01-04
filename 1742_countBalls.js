/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    function addDigits(n) {
        let ans = 0;
        while (n > 0) {
            ans += (n % 10);
            n = Math.trunc(n / 10);
        }
        return ans;
    }

    let arr = new Array(50).fill(0);
    for (let i = lowLimit; i <= highLimit; i++) {
        const ad = addDigits(i);
        arr[ad] += 1;
    }

    return Math.max(...arr);
};