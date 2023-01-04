/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    function calMaxBuckets(pigs, times) {
        if (times == 1) return Math.pow(2, pigs);
        if (pigs == 0) return 1;
        let ans = 0;
        for (let i = 0; i <= pigs; i++) {
            ans = ans + combine(i, pigs) * calMaxBuckets(pigs - i, times - 1);
        }
        return ans;
    }

    function combine(n, m) {
        n = Math.min(n, m - n);
        if (n == 0) return 1;
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans = ans * m / i;
            m--;
        }
        return ans;
    }

    let t = Math.trunc(minutesToTest / minutesToDie);
    for (let i = 0; ; i++) {
        if (calMaxBuckets(i, t) >= buckets) return i;
    }
};