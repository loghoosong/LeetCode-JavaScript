/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    let dp1 = -prices[0];
    let dp2 = 0;
    let dp3 = 0;
    for (let i = 1; i < len; i++) {
        //买入
        const temp1 = Math.max(dp1, dp3 - prices[i]);
        //卖出
        const temp2 = dp1 + prices[i];
        //冷静期
        const temp3 = Math.max(dp2, dp3);

        [dp1, dp2, dp3] = [temp1, temp2, temp3];
    }
    return Math.max(dp2, dp3);
};