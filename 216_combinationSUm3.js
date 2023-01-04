/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let ans = [];
    if (n < k * (k + 1) / 2 || n > k * (19 - k) / 2) return ans;

    function dfs(k, n, start, arr) {
        if (k == 0) {
            ans.push(arr.slice());
            return;
        }

        for (let i = start; i <= 10 - k; i++) {
            const min = (i + i + k - 1) * k / 2;
            const max = i + (k - 1) * (20 - k) / 2;
            if (min <= n && n <= max) {
                arr.push(i);
                dfs(k - 1, n - i, i + 1, arr);
                arr.pop();
            }
        }
    }

    dfs(k, n, 1, []);
    return ans;
};