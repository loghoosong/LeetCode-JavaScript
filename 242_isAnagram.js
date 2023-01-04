/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let m = new Map();
    for (let char of s) {
        const count = m.get(char) || 0;
        m.set(char, count + 1);
    }

    for (let char of t) {
        if (m.has(char)) {
            let count = m.get(char);
            if (count == 1) {
                m.delete(char);
            } else {
                m.set(char, count - 1);
            }
        } else {
            return false;
        }
    }
    return m.size == 0;
};