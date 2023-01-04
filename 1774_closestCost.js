/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function (baseCosts, toppingCosts, target) {
    let ans = baseCosts[0];
    let abs = Math.abs(target - ans);

    function dfs(idx, preCost) {
        if (ans == target) return;
        if (preCost >= target + abs) return;
        if (preCost == target - abs) {
            ans = preCost;
        } else if (preCost > target - abs) {
            ans = preCost;
            abs = Math.abs(preCost - target);
        }

        if (idx == toppingCosts.length) return;

        dfs(idx + 1, preCost);
        dfs(idx + 1, preCost + toppingCosts[idx]);
        dfs(idx + 1, preCost + toppingCosts[idx] + toppingCosts[idx]);
    }

    baseCosts.map(b => dfs(0, b));
    return ans;
};