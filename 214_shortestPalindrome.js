/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let len = s.length;
    let prefix = new Array(len).fill(0);
    for (let i = 1; i < len; i++) {
        let j = prefix[i - 1];
        while (j > 0 && s[i] != s[j]) {
            j = prefix[j - 1];
        }
        if (s[i] == s[j]) j++;
        prefix[i] = j;
    }

    let best = 0;
    for (let i = len - 1; i >= 0; i--) {
        while (best > 0 && s[best] != s[i]) {
            best = prefix[best - 1];
        }
        if (s[best] == s[i]) best++;
    }

    const addStr = s.slice(best);
    let addArr = addStr.split('').reverse();
    return addArr.join('') + s;
};