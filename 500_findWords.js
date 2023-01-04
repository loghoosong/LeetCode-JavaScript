/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const s1 = 'qwertyuiop', s2 = 'asdfghjkl', s3 = 'zxcvbnm';
    let map = new Map();
    for (let char of s1) {
        map.set(char, 1);
    }
    for (let char of s2) {
        map.set(char, 2);
    }
    for (let char of s3) {
        map.set(char, 3);
    }

    function check(word) {
        const row = map.get(word[0].toLowerCase());
        for (let i = 1; i < word.length; i++) {
            if (map.get(word[i].toLowerCase()) != row) return false;
        }
        return true;
    }

    return words.filter(w => check(w));
};