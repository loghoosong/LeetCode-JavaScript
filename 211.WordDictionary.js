var WordDictionary = function () {
    this.trie = new Trie();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.trie.addWord(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    function iterator(node, i) {
        if (i == word.length) return node.isEnd;
        if (word[i] == '.') {
            for (let j = 0; j < 26; j++) {
                if (node.words[j]) {
                    if (iterator(node.words[j], i + 1)) return true;
                }
            }
            return false;
        } else {
            const idx = word[i].codePointAt() - 97;
            if (!node.words[idx]) return false;
            return iterator(node.words[idx], i + 1);
        }
    }
    return iterator(this.trie, 0);
};

class Trie {
    constructor() {
        this.words = new Array(26).fill(false);
        this.isEnd = false;
    }

    addWord(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const idx = word[i].codePointAt() - 97;
            if (!node.words[idx]) {
                node.words[idx] = new Trie();
            }
            node = node.words[idx];
        }
        node.isEnd = true;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */