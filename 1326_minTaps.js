/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
    const maxRight = new Array(n + 1).fill().map((_, i) => i);

    ranges.map((r, i) => {
        const left = Math.max(0, i - r);
        const right = Math.min(n, i + r);
        maxRight[left] = Math.max(maxRight[left], right);
    });

    let ans = 0;
    let last = 0, pre = 0;;
    for (let i = 0; i < n; i++) {
        last = Math.max(last, maxRight[i]);
        if (i === last) {
            return -1;
        }
        if (i === pre) {
            ans++;
            pre = last;
        }
    }

    return ans;
};