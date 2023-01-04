/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let ans = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    function iteator(arr, from) {
        ans.push(arr);
        for (let i = from; i < len;) {
            iteator([...arr, nums[i]], i + 1);
            i++;
            while (i < len && nums[i] == nums[i - 1]) {
                i++;
            }
        }
    }

    iteator([], 0);
    return ans;
};