/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
    let ans = 0;
    n <<= 1;
    const sqrt = Math.trunc(Math.sqrt(n));
    for (let i = sqrt; i >= 1; i--) {
        if (n % i == 0) {
            const j = n / i;
            if (!(i & 1) == (j & 1)) ans++;
        }
    }

    return ans;
};