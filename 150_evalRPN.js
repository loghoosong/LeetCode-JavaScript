/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];
    let a, b;
    for (let t of tokens) {
        switch (t) {
            case '+':
                a = stack.pop();
                b = stack.pop();
                stack.push(b + a);
                break;
            case '-':
                a = stack.pop();
                b = stack.pop();
                stack.push(b - a);
                break;
            case '*':
                a = stack.pop();
                b = stack.pop();
                stack.push(b * a);
                break;
            case '/':
                a = stack.pop();
                b = stack.pop();
                stack.push(Math.trunc(b / a));
                break;
            default:
                stack.push(+t);
        }
    }
    return stack[0];
};