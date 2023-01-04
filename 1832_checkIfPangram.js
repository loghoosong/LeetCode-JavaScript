/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let count = 0;
    let arr = new Array(26).fill(false);
    for (let i = 0; i < sentence.length; i++) {
        const idx = sentence[i].codePointAt() - 97;
        if (!arr[idx]) {
            arr[idx] = true;
            count++;
            if (count == 26) return true;
        }
    }
    return false;
};