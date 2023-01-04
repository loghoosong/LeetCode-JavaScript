/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let ans = 0;
    let stack = [];
    let num = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case ' ':
                break;
            case '+':
                ans += sign * num;
                sign = 1;
                num = 0;
                break;
            case '-':
                ans += sign * num;
                sign = -1;
                num = 0;
                break;
            case '(':
                stack.push(ans);
                stack.push(sign);
                ans = 0;
                sign = 1;
                break;
            case ')':
                ans += sign * num;
                sign = stack.pop();
                ans = sign * ans + stack.pop();
                num = 0;
                break;
            default:
                num = num * 10 + +s[i];
        }
    }
    ans += sign * num;
    return ans;
};