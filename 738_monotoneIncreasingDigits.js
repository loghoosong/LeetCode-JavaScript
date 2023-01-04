/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
    if (n < 10) return n;

    let digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.trunc(n / 10);
    }

    const len = digits.length;
    let min = digits[0];
    for (let i = 1; i < len; i++) {
        if (digits[i] > min) {
            digits[i]--;
            for (let j = 0; j < i; j++) {
                digits[j] = 9;
            }
        }
        min = digits[i];
    }

    let ans = 0;
    for (let i = len - 1; i >= 0; i--) {
        ans = ans * 10 + digits[i];
    }
    return ans;
};