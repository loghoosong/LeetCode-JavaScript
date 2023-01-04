/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    const LOWERA = 97;
    const LOWERZ = 122;

    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];
    wordSet.delete(beginWord);

    let steps = new Map(), from = new Map();
    let step = 1;
    let start = [beginWord];
    let find = false;
    while (!find) {
        step++;
        let picked = [];
        start.map(word => {
            for (let i = 0; i < word.length; i++) {
                const head = word.slice(0, i);
                const tail = word.slice(i + 1);
                for (let j = LOWERA; j <= LOWERZ; j++) {//遍历16个字母
                    const newWord = head + String.fromCodePoint(j) + tail;
                    if (newWord != word && wordSet.has(newWord)) {
                        if (newWord == endWord) find = true;
                        if (!steps.has(newWord)) {
                            steps.set(newWord, step);
                            from.set(newWord, [word])
                            picked.push(newWord);
                        } else if (steps.get(newWord) == step) {
                            from.get(newWord).push(word);
                        }
                    }
                }
            }
        })
        if (picked.length == 0) return [];
        start = picked;
    }

    let ans = [];
    function backtrack(arr) {
        if (arr[0] == beginWord) {
            ans.push([].concat(arr));
            return;
        }

        const pre = from.get(arr[0]);
        pre.map(word => {
            arr.unshift(word);
            backtrack(arr);
            arr.shift();
        });
    }

    backtrack([endWord]);
    return ans;
}