/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    const countChars = s => {
        let arr = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            const idx = s[i].codePointAt() - 97;
            arr[idx]++;
        }
        return arr;
    }

    const sChars = countChars(s);
    const targetChars = countChars(target);
    let ans = Infinity;
    for (let i = 0; i < 26; i++) {
        if (targetChars[i] !== 0) {
            ans = Math.min(ans, Math.trunc(sChars[i] / targetChars[i]));
        }
    }
    return ans;
};