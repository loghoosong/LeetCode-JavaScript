/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const len = s.length;
    let ans = 1;

    let fMap = new Map([[-1, 0], [0, 1], [1, 1], [2, 2]]);
    function f(num) {
        if (fMap.has(num)) return fMap.get(num);
        let start = 2;
        for (let i = num; i > 2; i--) {
            if (fMap.has(i)) {
                start = i;
                break;
            }
        }
        for (let i = start; i < num; i++) {
            const ans = fMap.get(i) + fMap.get(i - 1);
            fMap.set(i + 1, ans);
        }
        return fMap.get(num);
    }

    let lastBreakIdx = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] == '0') {
            ans *= f(i - 1 - lastBreakIdx);
            lastBreakIdx = i + 1;
        } else if (+s[i] > 2) {
            ans *= f(i + 1 - lastBreakIdx);
            lastBreakIdx = i + 1;
        } else if (i < len - 1 && s[i] == '2' && +s[i + 1] > 6) {
            ans *= f(i + 1 - lastBreakIdx);
            lastBreakIdx = i + 1;
        }
    }
    ans *= f(len - lastBreakIdx);

    return ans;
};

console.log(numDecodings("111111111111111111111111111111111111111111111"));