/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    let factors = [];
    let primes = [3];

    function nextPrimes(prime) {
        outer: for (let i = prime + 2; ; i += 2) {
            const sqrt = Math.trunc(Math.sqrt(i));
            for (let p of primes) {
                if (p > sqrt) {
                    primes.push(i);
                    return i
                }
                if (i % p == 0) continue outer;
            };
        }
    }

    while (true) {
        if (n % 2 == 0) {
            factors.push(2);
            n >>= 1;;
            continue;
        }
        break;
    }

    let p = 3;
    while (n > 1) {
        if (n % p == 0) {
            factors.push(p);
            n /= p;
            continue;
        }
        p = nextPrimes(p);
    }

    return factors.reduce((sum, f) => sum + f, 0);
};