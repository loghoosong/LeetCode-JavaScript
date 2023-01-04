/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    function find(start, end, target) {
        while (start <= end) {
            const mid = start + end >> 1;
            if (numbers[mid] == target) {
                return mid;
            } else if (numbers[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }

    let l = 0, r = numbers.length - 1;
    while (l < r) {
        if (numbers[l] + numbers[r] == target) {
            return [l + 1, r + 1];
        } else if (numbers[l] + numbers[r] > target) {
            const f = find(l + 1, r, target - numbers[l]);
            if (f > l) return [l + 1, f + 1];
        }
        const temp = l;
        do {
            l++;
        } while (numbers[temp] == numbers[l]);
    }

};