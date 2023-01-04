/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const wLen = words[0].length;
    const sLen = s.length;
    const targetLen = words.length * wLen;

    let wordsMap = new Map();
    for (let word of words) {
        const count = wordsMap.get(word) || 0;
        wordsMap.set(word, count + 1);
    }

    let ans = [];
    for (let i = 0; i < wLen; i++) {
        let map = new Map(wordsMap);
        for (let k = i; k < i + targetLen; k += wLen) {
            const word = s.slice(k, k + wLen);
            const count = map.get(word) || 0;
            if (count == 1) {
                map.delete(word);
            } else {
                map.set(word, count - 1);
            }
        }
        if (map.size == 0) ans.push(i);

        for (let k = i + targetLen; k <= sLen - wLen; k += wLen) {
            const pre = s.slice(k - targetLen, k - targetLen + wLen);
            let count = map.get(pre) || 0;
            if (count == -1) {
                map.delete(pre);
            } else {
                map.set(pre, count + 1);
            }

            const next = s.slice(k, k + wLen);
            count = map.get(next) || 0;
            if (count == 1) {
                map.delete(next);
            } else {
                map.set(next, count - 1);
            }
            if (map.size == 0) ans.push(k - targetLen + wLen);
        }
    }

    return ans;
}