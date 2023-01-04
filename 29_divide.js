/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (dividend == -2147483648 && divisor == -1) return 2147483647;

    function positiveDivide(dividend, divisor) {
        let ans = 0;
        for (let carry = 31; carry >= 0; carry--) {
            if ((dividend >>> carry) >= divisor) {
                dividend -= divisor << carry;
                ans += -1 << carry;
            }
        }
        return -ans;
    }

    if (dividend >= 0 && divisor > 0) {
        return positiveDivide(dividend, divisor)
    } else if (dividend < 0 && divisor < 0) {
        return positiveDivide(-dividend, -divisor)
    } else if (dividend >= 0 && divisor < 0) {
        return -positiveDivide(dividend, -divisor)
    } else {
        return -positiveDivide(-dividend, divisor)
    }
};