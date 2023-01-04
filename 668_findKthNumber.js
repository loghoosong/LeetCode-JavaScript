/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
    function count(num, ub, lb) {
        let counter = 0;
        const sqrt = Math.trunc(Math.sqrt(num));
        const bound = Math.min(lb, sqrt);
        for (let i = 1; i <= bound; i++) {
            const col = Math.min(Math.trunc(num / i), ub);
            const row = Math.min(col, lb);
            counter += (row + col);
        }
        counter -= bound * bound;
        return counter;
    }

    const big = Math.max(m, n);
    const small = Math.min(m, n);

    let start = 1;
    let end = m * n;
    while (start <= end) {
        const mid = (start + end) >> 1;
        let c = count(mid, big, small);
        if (c == k) {
            start = mid;
            break;
        } else if (c > k) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    const idx = count(start, big, small);
    let tryNum = start - 1;
    while (true) {
        if (count(tryNum, big, small) < idx) {
            return tryNum + 1;
        } else {
            tryNum--;
        }
    }
};