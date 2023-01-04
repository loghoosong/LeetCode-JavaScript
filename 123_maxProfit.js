/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    let left = new Array(len), right = new Array(len);

    let min = prices[0], max = min, profit = 0;
    for (let i = 0; i < len; i++) {
        if (prices[i] > max) {
            max = prices[i];
        } else if (prices[i] < min) {
            min = prices[i];
            max = min;
        }
        profit = Math.max(profit, max - min);
        left[i] = profit;
    }

    max = prices[len - 1]; min = max; profit = 0;
    for (let i = len - 1; i >= 0; i--) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] > max) {
            max = prices[i];
            min = max;
        }
        profit = Math.max(profit, max - min);
        right[i] = profit;
    }

    let ans = 0;
    for (let i = 0; i < len; i++) {
        ans = Math.max(ans, left[i] + right[i]);
    }
    return ans;
};