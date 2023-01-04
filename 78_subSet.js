/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let len = nums.length;
    let ans = [];
    function iteator(arr, from, end) {
        ans.push(arr);
        for (let i = from; i < end; i++) {
            iteator([...arr, nums[i]], i + 1, end);
        }
    }

    iteator([], 0, len);
    return ans;
};