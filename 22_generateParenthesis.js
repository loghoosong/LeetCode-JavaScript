/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = [];
    function iteator(str, leftCount, rightCount) {
        if (leftCount == 0 && rightCount == 0) {
            ans.push(str);
            return;
        }
        if (leftCount > 0) {
            iteator(str + '(', leftCount - 1, rightCount);
        }
        if (rightCount != leftCount && rightCount > 0) {
            iteator(str + ')', leftCount, rightCount - 1);
        }
    }

    iteator('', n, n);
    return ans;
};

console.log(generateParenthesis(3));