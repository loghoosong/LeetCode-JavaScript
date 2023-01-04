/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        const num = s[i].codePointAt() - 96;
        ans += num % 10 + Math.trunc(num / 10);
    }

    while (k > 1) {
        let temp = ans;
        ans = 0;
        while (temp > 0) {
            ans += temp % 10;
            temp = Math.trunc(temp / 10);
        }
        k--;
    }
    return ans;
};