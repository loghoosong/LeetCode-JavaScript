/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function (n, k) {
    const MOD = Math.pow(10, n - 1);
    const set = new Set();
    let ans = [];

    const dfs = num => {
        for (let i = 0; i < k; i++) {
            let temp = num * 10 + i;
            if (!set.has(temp)) {
                set.add(temp);
                dfs(temp % MOD);
                ans.push(i);
            }
        }
    }

    dfs(0);
    return ans.concat(new Array(n - 1).fill(0))
        .join('');
}; 