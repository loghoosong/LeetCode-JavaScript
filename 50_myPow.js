/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (x == 0) return 0;
    if (x == 1 || n == 0) return 1;

    function positivePow(x, n) {
        let ans = 1;
        while (n >= 1) {
            if (n & 1 == 1) ans *= x;
            x *= x;
            n >>>= 1;
        }
        return ans;
    }

    if (n > 0) {
        return positivePow(x, n);
    } else {
        return positivePow(1 / x, -n);
    }
};

console.log(myPow(2.00000, - 2147483648,));