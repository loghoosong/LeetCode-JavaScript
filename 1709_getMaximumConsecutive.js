/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
    coins.sort((a, b) => a - b);

    let ans = 1;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > ans) break;
        ans += coins[i];
    }
    return ans;
};