/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = nums.length;

    function nextEnd(end, start) {
        end--;
        while (nums[end] == val && end > start) {
            len--;
            end--;
        }
        return end;
    }

    let end = nextEnd(len, -1);

    for (let start = 0; start < end; start++) {
        if (nums[start] == val) {
            nums[start] = nums[end];
            len--;
            end = nextEnd(end, start);
        }
    }
    return len;
};