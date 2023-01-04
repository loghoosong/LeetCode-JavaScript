/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
    if (n < 12) return -1;
    let digits = [];
    while (n > 0) {
        digits.push(n % 10);
        n = Math.trunc(n / 10);
    }
    let len = digits.length;
    let i = 1;
    outer: for (; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (digits[j] > digits[i]) {
                let temp = digits[j];
                digits[j] = digits[i];
                digits[i] = temp;
                break outer;
            }
        }
    }
    if (i == len) return -1;

    let tempArr = digits.splice(0, i);
    tempArr.sort((a, b) => b - a);
    digits = tempArr.concat(digits);

    if (len == 10) {
        let inf = [7, 4, 6, 3, 8, 4, 7, 4, 1, 2];
        for (let j = 9; j >= 0; j--) {
            if (digits[j] < inf[j]) {
                break;
            } else if (digits[j] > inf[j]) {
                return -1;
            }
        }
    }

    for (let i = len - 1; i >= 0; i--) {
        n = 10 * n + digits[i];
    }
    return n;
};