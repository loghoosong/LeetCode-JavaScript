/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    let money = [[], []];
    money[1][1] = 0;
    for (let i = 2; i <= n; i++) {
        money.push([]);
        money[i][i] = 0;
        money[i - 1][i] = i - 1;
        for (let j = i - 2; j > 0; j--) {
            let min = Infinity;
            for (let k = i - 1; k > j; k--) {
                min = Math.min(min, Math.max(k + money[j][k - 1], k + money[k + 1][i]));
            }
            money[j][i] = min;
        }
    }

    return money[1][n];
};