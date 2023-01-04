/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let digits = [];

    function addOne() {
        let len = digits.length;
        for (let i = 0; i < len; i++) {
            digits[i]++;
            if (digits[i] > 9) {
                digits[i] -= 10;
            } else {
                return;
            }
        }
        digits.push(1);
    }

    function checkDigits(num) {
        for (let d of digits) {
            if (num % d != 0) return false;
        }
        return true;
    }

    let n = left;
    while (n > 0) {
        digits.push(n % 10);
        n = Math.trunc(n / 10);
    }

    let ans = [];
    for (let i = left; i <= right; i++) {
        if (checkDigits(i)) ans.push(i);
        addOne();
    }

    return ans;
};