/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    let trie = new Trie();
    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }

    function dfs(trie, i, j) {
        const char = board[i][j];
        const nextTrie = trie.children[char];
        if (nextTrie) {
            board[i][j] = '.';
            if (nextTrie.word != '') {
                ans.push(nextTrie.word);
                nextTrie.word = '';
            }
            if (i > 0) dfs(nextTrie, i - 1, j);
            if (i < m - 1) dfs(nextTrie, i + 1, j);
            if (j > 0) dfs(nextTrie, i, j - 1);
            if (j < n - 1) dfs(nextTrie, i, j + 1);
            board[i][j] = char;
        }
        return;
    }

    let ans = [];
    const m = board.length;
    const n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dfs(trie, i, j);
        }
    }
    return ans;
};

class Trie {
    constructor() {
        this.children = {};
        this.word = '';
    }

    insert(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                node.children[word[i]] = new Trie();
            }
            node = node.children[word[i]];
        }
        node.word = word;
    }
}