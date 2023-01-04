/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let vote1 = 0, num1 = 0;
    let vote2 = 0, num2 = 0;

    nums.map(num => {
        if (vote1 > 0 && num == num1) {
            vote1++;
        } else if (vote2 > 0 && num == num2) {
            vote2++;
        } else if (vote1 === 0) {
            num1 = num;
            vote1++;
        } else if (vote2 === 0) {
            num2 = num;
            vote2++;
        } else {
            vote1--;
            vote2--;
        }
    });

    let count1 = 0, count2 = 0;
    nums.map(num => {
        if (vote1 > 0 && num === num1) {
            count1++;
        } else if (vote2 > 0 && num === num2) {
            count2++;
        }
    });

    let ans = [];
    if (count1 > Math.trunc(nums.length / 3)) ans.push(num1);
    if (count2 > Math.trunc(nums.length / 3)) ans.push(num2);
    return ans;
};