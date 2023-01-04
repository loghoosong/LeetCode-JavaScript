/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
    const sl = s.length;
    let sMap = new Map();
    for (let i = 0; i < sl; i++) {
        if (sMap.has(s[i])) {
            sMap.get(s[i]).push(i);
        } else {
            sMap.set(s[i], [i]);
        }
    }

    function myFind(target, arr) {
        let start = 0;
        let end = arr.length - 1;
        if (target > arr[end]) return -1;
        while (start <= end) {
            const mid = start + end >> 1;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return start;
    }

    let ans = 0;
    outer: for (const word of words) {
        if (word.length > sl) continue;
        let idx = 0;
        for (let i = 0; i < word.length; i++) {
            const arr = sMap.get(word[i]);
            if (!arr) continue outer;
            const j = myFind(idx, arr);
            if (j == -1) continue outer;
            idx = arr[j] + 1;
        }
        ans++;
    }

    return ans;
};