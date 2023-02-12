/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
    let cnts = new Array(121).fill(0);
    ages.map(age => {
        cnts[age]++;
    });

    const preSum = [cnts[0]];
    for (let i = 1; i < 121; i++) {
        preSum[i] = preSum[i - 1] + cnts[i];
    }

    let ans = 0;
    for (let x = 15; x < 121; x++) {
        if (cnts[x] > 0) {
            const y = (x >> 1) + 7;
            ans += cnts[x] * (preSum[x] - 1 - preSum[y]);
        }
    }
    return ans;
};