/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
    let map = new Map();
    function iteator(from, end) {
        const flag = 100 * from + end;
        if (map.has(flag)) return map.get(flag);
        if (end - from == 1) {
            const re = new Node(nums[from], nums[from].toString(), nums[from], nums[from].toString());
            map.set(flag, re);
            return re;
        }
        if (end - from == 2) {
            const reVal = nums[from] / nums[from + 1];
            const reStr = nums[from] + '/' + nums[from + 1];
            const re = new Node(reVal, reStr, reVal, reStr);
            map.set(flag, re);
            return re;
        }

        let node = new Node();
        for (let i = from + 1; i < end; i++) {
            const left = iteator(from, i);
            const right = iteator(i, end);
            const max = left.maxVal / right.minVal;
            const min = left.minVal / right.maxVal;
            if (max > node.maxVal) {
                node.maxVal = max;
                if (end - i == 1) {
                    node.maxStr = left.maxStr + '/' + right.minStr;
                } else {
                    node.maxStr = left.maxStr + '/(' + right.minStr + ')';
                }
            }
            if (min < node.minVal) {
                node.minVal = min;
                if (end - i == 1) {
                    node.minStr = left.minStr + '/' + right.maxStr;
                } else {
                    node.minStr = left.minStr + '/(' + right.maxStr + ')';
                }
            }
        }
        map.set(flag, node);
        return node;
    }

    return iteator(0, nums.length).maxStr;
};

class Node {
    constructor(maxVal = 0, maxStr = '', minVal = Infinity, minStr = '') {
        this.maxVal = maxVal;
        this.maxStr = maxStr;
        this.minVal = minVal;
        this.minStr = minStr;
    }
}

console.log(optimalDivision([1000, 100, 10, 2]));