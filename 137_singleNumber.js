/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let digits = new Array(32).fill(0);
    function addDigits(num) {
        let i = 0;
        while (num != 0) {
            digits[i] += num & 1;
            num >>>= 1;
            i++;
        }
    }

    nums.map(v => addDigits(v));

    let ans = 0;
    for (let i = 0; i <= 31; i++) {
        ans <<= 1;
        ans |= digits[31 - i] % 3;
    }
    if (digits[31] % 3 == 1) ans = ~(ans ^ 0xffffffff)//负数补码
    return ans;
};