/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let char of s) {
        switch (char) {
            case ')':
                if (stack.pop() != '(') return false;
                break;
            case '}':
                if (stack.pop() != '{') return false;
                break;
            case ']':
                if (stack.pop() != '[') return false;
                break;
            default:
                stack.push(char);
        }
    }

    return stack.length == 0;
};