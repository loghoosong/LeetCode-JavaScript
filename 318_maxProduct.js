/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    function toNum(word) {
        let ans = 0;
        for (let i = 0; i < word.length; i++) {
            const num = word[i].codePointAt() - 97;
            ans |= (1 << num);
        }
        return ans;
    }

    let map = new Map();
    words.map(w => {
        const num = toNum(w);
        const l = map.get(num) || 0;
        map.set(num, Math.max(l, w.length));
    });

    let ans = 0;
    let arr = Array.from(map.keys());
    for (let i = 0; i < arr.length - 1; i++) {
        const len = map.get(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] & arr[j]) === 0) {
                ans = Math.max(ans, len * map.get(arr[j]));
            }
        }
    }
    return ans;
};