/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    function isInvalid(str) {
        let cnt = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                cnt++;
            } else if (str[i] === ')') {
                if (cnt === 0) {
                    return false;
                } else {
                    cnt--;
                }
            }
        }
        return cnt === 0;
    }

    function help(s, start, lRemove, rRemove) {
        if (lRemove === 0 && rRemove === 0) {
            if (isInvalid(s)) ans.push(s);
            return;
        }

        for (let i = start; i < s.length; i++) {
            if (i !== start && s[i] === s[i - 1]) continue;

            if (lRemove + rRemove > s.length) return;

            if (lRemove > 0 && s[i] === '(') {
                help(s.slice(0, i) + s.slice(i + 1), i, lRemove - 1, rRemove);
            }
            if (rRemove > 0 && s[i] === ')') {
                help(s.slice(0, i) + s.slice(i + 1), i, lRemove, rRemove - 1);
            }
        }
    }

    let lRemove = 0, rRemove = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            lRemove++;
        } else if (s[i] === ')') {
            if (lRemove === 0) {
                rRemove++;
            } else {
                lRemove--;
            }
        }
    }

    let ans = [];
    help(s, 0, lRemove, rRemove);
    return ans;
};