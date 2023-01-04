/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let ans = new Array(boxes.length);
    let diff = boxes[0] == '1';
    let ops = 0;
    for (let i = 1; i < boxes.length; i++) {
        if (boxes[i] == '1') {
            diff--;
            ops += i;
        }
    }
    ans[0] = ops;

    for (let i = 1; i < boxes.length; i++) {
        ans[i] = ans[i - 1] + diff;
        if (boxes[i] == '1') diff += 2;
    }
    return ans;
};