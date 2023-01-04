/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    function combination(a, b) {
        let ans = 1;
        a = a > (b - a) ? b - a : a;
        for (let i = 1; i <= a; i++) {
            ans *= (b / i);
            b--;
        }
        return ans;
    }

    let ans = 0;
    let j = 0;
    for (let i = n; i >= n / 2; i--) {
        ans += combination(j, i);
        j++;
    }
    return ans;
};