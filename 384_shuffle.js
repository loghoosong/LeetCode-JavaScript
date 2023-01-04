/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let ans = [].concat(this.nums);
    let len = ans.length;
    for (let i = 0; i < len; i++) {
        let random = Math.trunc(Math.random() * (len - i));
        let temp = ans[random];
        ans[random] = ans[len - i - 1];
        ans[len - i - 1] = temp;
    }
    return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */