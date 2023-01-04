/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = [];
    let arr = [];
    let used = new Set();
    function iteator() {
        if (used.size == len) {
            ans.push([].concat(arr));
            return;
        }
        for (let n of nums) {
            if (!used.has(n)) {
                arr.push(n);
                used.add(n);
                iteator();
                used.delete(n);
                arr.pop();
            }
        }
    }

    let len = nums.length;
    iteator();
    return ans;
};

console.log(permute([1, 2, 3]));