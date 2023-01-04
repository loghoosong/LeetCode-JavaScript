/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let ans = '';
    let carry = 0;
    function getNumFromRight(str, n, len) {
        if (n > len) return 0;
        return +str[len - n];
    }

    let len1 = num1.length;
    let len2 = num2.length;
    let maxLen = Math.max(len1, len2);
    for (let i = 1; i <= maxLen; i++) {
        let re = getNumFromRight(num1, i, len1) + getNumFromRight(num2, i, len2) + carry;
        if (re > 9) {
            re -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        ans = re + ans;
    }

    return carry == 1 ? '1' + ans : ans;
};