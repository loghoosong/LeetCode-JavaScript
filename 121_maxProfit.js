/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let sell = prices[0];
    let ans = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
            sell = prices[i];
        } else if (prices[i] > sell) {
            sell = prices[i];
            ans = Math.max(ans, sell - buy);
        }
    }

    return ans;
};