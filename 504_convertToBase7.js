/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (num == 0) return '0';
    let sign = false;
    if (num < 0) {
        num = -num;
        sign = true;
    };

    let ans = '';
    while (num != 0) {
        ans = (num % 7).toString() + ans;
        num = Math.trunc(num / 7);
    }
    if (sign) ans = '-' + ans;
    return ans;
};