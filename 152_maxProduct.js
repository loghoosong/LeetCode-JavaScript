/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let ans = nums[0];
    function part(from) {
        let mul = nums[from], firstNega = nums[from], lastNega = nums[from];
        let idx = from + 1;
        while (idx < nums.length && nums[idx] != 0) {
            mul *= nums[idx];
            if (firstNega > 0) firstNega *= nums[idx];
            if (nums[idx] < 0) {
                lastNega = nums[idx];
            } else {
                lastNega *= nums[idx];
            }
            idx++;
        }
        if (idx == from + 1) {
            ans = Math.max(ans, mul);
        } else {
            ans = Math.max(ans, mul, mul / firstNega, mul / lastNega);
        }
        return idx;
    }

    let i = 0;
    while (i < nums.length) {
        if (nums[i] == 0) {
            i++;
            ans = Math.max(ans, 0);
        } else {
            i = part(i);
        }
    }

    return ans;
};