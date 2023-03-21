/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
    const profitEachTime = n => boardingCost * n - runningCost;
    if (profitEachTime(4) <= 0) return -1;

    let ans = -1;
    let maxProfit = 0, totalProfit = 0;
    let customersCnt = 0;

    //遍历所有游客
    customers.map((c, i) => {
        customersCnt += c;
        let curCustomers = Math.min(customersCnt, 4);
        customersCnt -= curCustomers;
        totalProfit += profitEachTime(curCustomers);
        if (totalProfit > maxProfit) {
            maxProfit = totalProfit;
            ans = i + 1;
        }
    });

    //如果有游客剩余
    if (customersCnt > 0) {
        const fullTimes = Math.trunc(customersCnt / 4);
        totalProfit += profitEachTime(4) * fullTimes;
        if (totalProfit > maxProfit) {
            maxProfit = totalProfit;
            ans = customers.length + fullTimes;
        }

        const remainingCustomers = customersCnt % 4;
        totalProfit += profitEachTime(remainingCustomers);
        if (totalProfit > maxProfit) {
            maxProfit = totalProfit;
            ans++;
        }
    }

    return ans;
};