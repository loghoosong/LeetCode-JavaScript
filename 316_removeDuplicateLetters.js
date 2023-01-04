/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let stack = [];
    let visited = new Array(26).fill(false);//判断当前字符是否在stack上

    let counter = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        const idx = s[i].codePointAt() - 97;
        counter[idx]++;
    }

    for (let i = 0; i < s.length; i++) {
        const idx = s[i].codePointAt() - 97;
        if (!visited[idx]) {
            while (stack.length > 0 && stack[stack.length - 1] > s[i]) {
                const t = stack[stack.length - 1].codePointAt() - 97;
                if (counter[t] > 0) {//后面还有栈顶字母
                    stack.pop();
                    visited[t] = false;
                } else {//后面没有该字母了
                    break;
                }
            }
            stack.push(s[i]);
            visited[idx] = true;
        }
        counter[idx]--;
    }

    return stack.join('');
};