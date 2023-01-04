/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    function addWord(word) {
        if (!wordMap.has(word)) {
            wordMap.set(word, nodeIdx);
            edge.push([]);
            nodeIdx++;
        }
    }

    function addEdge(word) {
        addWord(word);
        const idx1 = wordMap.get(word);
        for (let i = 0; i < word.length; i++) {
            let newWord = word.slice(0, i) + '*' + word.slice(i + 1);
            addWord(newWord);
            const idx2 = wordMap.get(newWord);
            edge[idx1].push(idx2)
            edge[idx2].push(idx1);
        }
    }

    let wordMap = new Map();
    let edge = new Array();
    let nodeIdx = 0;

    wordList.map(w => addEdge(w));
    if (!wordMap.has(endWord)) return 0;
    addEdge(beginWord);
    const endIdx = wordMap.get(endWord);
    const beginIdx = wordMap.get(beginWord);

    let dis = new Array(nodeIdx);
    dis[beginIdx] = 0;

    let queue = [beginIdx];
    while (queue.length > 0) {
        let x = queue.shift();
        if (x == endIdx) {
            return (dis[endIdx] >> 1) + 1;
        }
        for (let i of edge[x]) {
            if (!dis[i]) {
                dis[i] = dis[x] + 1;
                queue.push(i);
            }
        }
    }

    return 0;
};