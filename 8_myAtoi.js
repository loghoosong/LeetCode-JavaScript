/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trimStart();

    const len = s.length;
    if (len == 0) return 0;


    let sign = 1;
    let start = 0;
    if (s[0] == '-') {
        sign = -1;
        start = 1;
    } else if (s[0] == '+') {
        start = 1;
    }

    let ans = 0;
    const BOUND = 2147483648;
    for (let i = start; i < len; i++) {
        if (isNaN(s[i]) || s[i] == ' ') return sign * ans;
        ans = ans * 10 + +s[i];
        if (sign == -1 && ans >= BOUND) {
            return -BOUND;
        } else if (sign == 1 && ans >= BOUND - 1) {
            return BOUND - 1;
        }
    }

    return sign * ans;
};