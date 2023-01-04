/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const len = s.length;
    if (len > 12) return [];

    let ans = [];
    function iteator(count, from, arr) {
        if (count == -1) {
            ans.push(arr.join('.'));
            return;
        }

        const minDigits = len - from - 3 * count;
        const maxDigits = Math.min(3, len - from - count);
        if (s[from] == '0') {
            if (minDigits <= 1) {
                arr.push(0);
                iteator(count - 1, from + 1, arr);
                arr.pop();
            }
            return;
        }

        let num = 0;
        for (let i = from; i < from + maxDigits; i++) {
            num = num * 10 + +s[i];
            if (num > 255) return;
            if (i - from + 1 >= minDigits) {
                arr.push(num);
                iteator(count - 1, i + 1, arr);
                arr.pop();
            }
        }
    }

    iteator(3, 0, []);
    return ans;
};