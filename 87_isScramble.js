/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    const len = s1.length;
    //const ns1 = s1.split('').sort().join('');
    //const ns2 = s2.split('').sort().join('');
    //if (ns1 != ns2) return false;

    let arr = new Array(len).fill(0).map(() => new Array(len).fill(0).map(() => new Array(len + 1).fill(false)));

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            arr[i][j][1] = (s1[i] == s2[j]);
        }
    }

    for (let l = 2; l <= len; l++) {
        for (let i = 0; i <= len - l; i++) {
            for (let j = 0; j <= len - l; j++) {
                for (let k = 1; k < l; k++) {
                    const left = arr[i][j][k] && arr[i + k][j + k][l - k];
                    const right = arr[i][j + l - k][k] && arr[i + k][j][l - k];
                    if (left || right) arr[i][j][l] = true;
                }
            }
        }
    }

    return arr[0][0][len];
}