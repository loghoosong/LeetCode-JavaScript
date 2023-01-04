/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
    const num = +n;
    const mMax = Math.trunc(Math.log(num) / Math.log(2));
    for (let i = mMax; i > 1; i--) {
        const k = BigInt(Math.trunc(Math.pow(num, 1 / i)));
        if (k > 1) {
            let ans = 1n;
            for (let j = 1; j <= i; j++) {
                ans = 1n + ans * BigInt(k);
            }
            if (ans == BigInt(n)) return k.toString();
        }
    }

    return (BigInt(n) - 1n).toString();
};


console.log(smallestGoodBase("13"));