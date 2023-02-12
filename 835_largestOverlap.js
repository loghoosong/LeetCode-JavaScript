/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function (img1, img2) {
    const n = img1.length;

    const toNum = arr => arr.reduce((num, d) => (num << 1) + d, 0);

    const cntDigits = num => {
        let cnt = 0;
        while (num > 0) {
            cnt += (num & 1);
            num >>= 1;
        }
        return cnt;
    }

    let ans = 0;
    const arr1 = img1.map(row => toNum(row));
    const arr2 = img2.map(row => toNum(row));
    for (let offsetRow = 0; offsetRow < n; offsetRow++) {
        for (let offsetCol = 0; offsetCol < n; offsetCol++) {
            let digitsCnt1 = 0, digitsCnt2 = 0, digitsCnt3 = 0, digitsCnt4 = 0;
            for (let i = offsetCol; i < n; i++) {
                digitsCnt1 += cntDigits((arr1[i - offsetCol] >> offsetRow) & arr2[i]);
                digitsCnt2 += cntDigits((arr1[i] >> offsetRow) & arr2[i - offsetCol]);
                digitsCnt3 += cntDigits((arr2[i - offsetCol] >> offsetRow) & arr1[i]);
                digitsCnt4 += cntDigits((arr2[i] >> offsetRow) & arr1[i - offsetCol]);
            }
            ans = Math.max(ans, digitsCnt1, digitsCnt2, digitsCnt3, digitsCnt4)
        }
    }
    return ans;
};