/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
    nums.sort((a, b) => a - b);
    const sum = new Array(nums.length + 1).fill(0);
    nums.map((n, i) => { sum[i + 1] = sum[i] + n });

    const find = (array, target) => {
        let left = 0, right = array.length - 1;
        if (target >= array[right]) return right;
        while (left < right) {
            const mid = (left + right + 1) >> 1;
            if (array[mid] == target) {
                return mid;
            } else if (array[mid] < target) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    return queries.map(q => find(sum, q));
};