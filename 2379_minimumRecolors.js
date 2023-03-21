/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let wCnt = 0;
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') wCnt++;
    }
    let ans = wCnt;

    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] == 'W' && blocks[i - k] == 'B') {
            wCnt++;
        } else if (blocks[i] == 'B' && blocks[i - k] == 'W') {
            wCnt--;
            ans = Math.min(ans, wCnt);
        }
    }
    return ans;
};