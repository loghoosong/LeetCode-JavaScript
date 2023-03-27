/**
 * @param {string[]} words
 */
var StreamChecker = function (words) {
    this.trie = new Trie();
    this.letters = [];
    words.map(w => { this.trie.insert_reverse(w) });
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function (letter) {
    this.letters.push(letter);
    let cur = this.trie;
    for (let i = this.letters.length - 1; i >= 0; i--) {
        if (cur.end) return true;
        const idx = this.letters[i].codePointAt() - 97;
        if (!cur.children[idx]) return false;
        cur = cur.children[idx];
    }
    return cur.end;
};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */

class Trie {
    constructor() {
        this.children = new Array(26);
        this.end = false;
    }

    insert_reverse(str) {
        let cur = this;
        for (let i = str.length - 1; i >= 0; i--) {
            const idx = str[i].codePointAt() - 97;
            if (!cur.children[idx]) {
                cur.children[idx] = new Trie();
            }
            cur = cur.children[idx];
        }
        cur.end = true;
    }
}