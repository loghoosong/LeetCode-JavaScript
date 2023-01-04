/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    const isDigit = char => {
        const c = char.codePointAt();
        return c >= 48 && c <= 57;
    }

    let pre = -1;
    for (let i = 0; i < s.length; i++) {
        if (isDigit(s[i])) {
            let cur = 0;
            while (i < s.length && isDigit(s[i])) {
                cur = cur * 10 + s[i].codePointAt() - 48;
                i++;
            }
            if (cur <= pre) return false;
            pre = cur;
        }
    }
    return true;
};