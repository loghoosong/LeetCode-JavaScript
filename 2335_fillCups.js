/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function (amount) {
    amount.sort((a, b) => b - a);

    if (amount[0] >= amount[1] + amount[2]) {
        return amount[0];
    }
    return amount[1] + (amount[0] + amount[2] - amount[1] + 1 >> 1);
};