/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    let ans = '';
    const push = n => {
        const s = '' + n;
        if (ans.length % 4 === 3) {
            ans = s + '.' + ans;
        } else {
            ans = s + ans;
        }
    }

    do {
        let tail = n % 10;
        n = Math.trunc(n / 10);
        push(tail);
    } while (n > 0);
    return ans;
};