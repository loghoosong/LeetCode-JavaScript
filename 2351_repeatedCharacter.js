/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let char = new Array(26).fill(false);
    for (let i = 0; i < s.length; i++) {
        const idx = s[i].codePointAt() - 97;
        if (char[idx]) {
            return s[i];
        } else {
            char[idx] = true;
        }
    }
};