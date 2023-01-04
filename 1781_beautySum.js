/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
    let ans = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let charsCount = new Array(26).fill(0);
        let max = 0;
        for (let j = i; j < s.length; j++) {
            const idx = s[j].codePointAt() - 97;
            charsCount[idx]++;
            max = Math.max(max, charsCount[idx]);
            let min = max;
            charsCount.map(c => {
                if (c > 0) min = Math.min(min, c);
            });
            ans += max - min;
        }
    }
    return ans;
};