/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 3) return 0;
    if (n == 3) return 1;

    let primesArr = [];

    function isPrimes(num) {
        let sqrt = Math.trunc(Math.sqrt(num));
        for (let p of primesArr) {
            if (p <= sqrt) {
                if (Math.trunc(num / p) * p == num) return false;
            } else {
                return true
            }
        }
        return true;
    }

    for (let i = 3; i < n; i += 2) {
        if (isPrimes(i)) primesArr.push(i);
    }
    return primesArr.length + 1;
};

console.log(countPrimes(1500000));