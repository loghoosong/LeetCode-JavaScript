/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = [];
    let pArr = path.split('/');
    for (let s of pArr) {
        if (s != '' && s != '.') {
            if (s == '..') {
                if (stack.length > 0) stack.pop();
            } else {
                stack.push(s);
            }
        }
    }

    return '/' + stack.join('/');
};