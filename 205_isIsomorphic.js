/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let sMap = new Map();
    let tSet = new Set();
    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            if (sMap.get(s[i]) != t[i]) return false;
        } else {
            if (tSet.has(t[i])) return false;
            sMap.set(s[i], t[i]);
            tSet.add(t[i]);
        }
    }

    return true;
};