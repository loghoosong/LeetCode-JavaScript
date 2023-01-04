/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    const len = s.length;
    let stack = [];
    let max = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            if (stack.length == 0 || s[stack[stack.length - 1]] == ')') {
                stack.push(i);
            } else {
                stack.pop();
            }
        }
    }

    stack.push(len);
    const errLen = stack.length;
    max = Math.max(max, stack[0]);
    for (let i = 1; i < errLen; i++) {
        max = Math.max(max, stack[i] - stack[i - 1] - 1);
    }
    return max;
};