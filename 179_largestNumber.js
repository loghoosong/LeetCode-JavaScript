/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    if (nums.reduce((s, n) => s + n, 0) == 0) return '0';

    nums.sort((a, b) => {
        if (a == b) return 0;
        if (a == 0) return 1;
        if (b == 0) return -1;
        const na = a * (Math.pow(10, 1 + Math.trunc(Math.log10(b)))) + b;
        const nb = b * (Math.pow(10, 1 + Math.trunc(Math.log10(a)))) + a;
        return nb > na ? 1 : -1;
    })

    return nums.join('');
};