/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let ans = 1;
    switch (n) {
        case 2:
            return 1;
        case 3:
            return 2;
        default:
            iterator();
    }

    function iterator() {
        if (n > 4) {
            ans *= 3;
            n -= 3;
            iterator();
        } else {
            ans *= n;
        }
    }
    return ans;
};