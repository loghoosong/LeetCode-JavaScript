/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const LowercaseA = 97;
    const LowercaseZ = 122;
    const UppercaseA = 65;
    const UppercaseZ = 90;
    const ZERO = 48;
    const NINE = 57;

    function deal(s) {
        let ans = '';
        for (let char of s) {
            if (char.codePointAt() >= LowercaseA && char.codePointAt() <= LowercaseZ) {
                ans += char;
            } else if (char.codePointAt() >= ZERO && char.codePointAt() <= NINE) {
                ans += char;
            } else if (char.codePointAt() >= UppercaseA && char.codePointAt() <= UppercaseZ) {
                ans += String.fromCharCode(char.codePointAt() + 32);
            }
        }
        return ans;
    }

    function judge(s) {
        const len = s.length;
        const mid = len >> 1;
        for (let i = 0; i <= mid; i++) {
            if (s[i] != s[len - 1 - i]) return false;
        }
        return true;
    }

    return judge(deal(s));
};