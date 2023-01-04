/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let ans = [];
    function iteator(arr, from, end, len) {
        if (len == 0) {
            ans.push([...arr]);
            return;
        }
        for (let i = from; i <= end; i++) {
            arr.push(i);
            iteator(arr, i + 1, end, len - 1);
            arr.pop();
        }
    }

    iteator([], 1, n, k);

    return ans;
};