/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let arr = [1].concat(nums);
    arr.push(1);
    let len = arr.length;
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(0));

    for (let i = len - 3; i >= 0; i--) {//左边界
        for (let j = i + 2; j < len; j++) {//右边界
            for (let k = i + 1; k < j; k++) {//中间打破气球的位置
                let total = arr[i] * arr[k] * arr[j];
                total += dp[i][k] + dp[k][j];
                dp[i][j] = Math.max(dp[i][j], total);
            }
        }
    }

    return dp[0][len - 1];
};