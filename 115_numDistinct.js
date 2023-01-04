/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    if (t.length > s.length) return 0;

    let arr = new Array(t.length + 1).fill(0);
    arr[t.length] = 1;

    for (let i = s.length - 1; i >= 0; i--) {
        let temp = [].concat(arr);
        for (let j = t.length - 1; j >= 0; j--) {
            if (s[i] == t[j]) {
                temp[j] = arr[j] + arr[j + 1];
            }
        }
        arr = temp;
    }
    return arr[0];
};