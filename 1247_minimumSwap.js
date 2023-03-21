/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function (s1, s2) {
    let xDiff = 0, yDiff = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (s1[i] === 'x') {
                xDiff++;
            } else {
                yDiff++;
            }
        }
    }

    return ((xDiff + yDiff) & 1) === 1
        ? -1
        : (xDiff + 1 >> 1) + (yDiff + 1 >> 1);
};