/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (k == 0) return 0;
    if (prices.length < 2) return 0;

    let buys = new Array(k + 1).fill(prices[0]);
    let sells = new Array(k + 1).fill(0);
    prices.map(p => {
        for (let i = 1; i <= k; i++) {
            buys[i] = Math.min(buys[i], p - sells[i - 1]);
            sells[i] = Math.max(sells[i], p - buys[i]);
        }
    });
    return sells[k];
};