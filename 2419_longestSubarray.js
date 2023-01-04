/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let counter = 0;
    let maxCounter = 0;
    let maxNum = 0;
    for (let num of nums) {
        if (num > maxNum) {
            maxNum = num;
            maxCounter = 1;
            counter = 1;
        } else if (num == maxNum) {
            counter++;
        } else {
            maxCounter = counter > maxCounter ? counter : maxCounter;
            counter = 0;
        }
    };
    return counter > maxCounter ? counter : maxCounter;
};