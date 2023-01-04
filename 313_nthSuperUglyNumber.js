/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
    if (n == 1) return 1;
    let index = [0];
    let superUglyNumber = [1];
    while (n > 1) {
        let min = Infinity;
        for (let i = 0; i < index.length; i++) {
            let temp = primes[i] * superUglyNumber[index[i]];
            if (temp < min) min = temp;
        }
        superUglyNumber.push(min);
        for (let i = 0; i < index.length; i++) {
            let temp = primes[i] * superUglyNumber[index[i]];
            if (temp == min) {
                index[i]++;
                if (i == index.length - 1 && i < primes.length - 1) index.push(0);
            }
        }
        n--;
    }
    return superUglyNumber[superUglyNumber.length - 1];
};