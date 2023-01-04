/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    let numerator = [];
    let denominator = [];
    let sign = 1;
    let num = 0;
    for (let char of expression) {
        switch (char) {
            case '+':
                denominator.push(num);
                sign = 1;
                num = 0;
                break;
            case '-':
                if (numerator.length > 0) denominator.push(num);
                sign = -1;
                num = 0;
                break;
            case '/':
                numerator.push(num * sign);
                num = 0;
                break;
            default:
                num = num * 10 + +char;
        }
    }
    denominator.push(num);

    let deno = denominator.reduce((deno, item) => deno * item, 1);
    for (let i = 0; i < numerator.length; i++) {
        numerator[i] = numerator[i] * deno / denominator[i];
    }
    let numer = numerator.reduce((numer, item) => numer + item, 0);

    if (numer == 0) return '0/1'
    if (numer % deno == 0) return (numer / deno).toString() + '/1';
    if (deno % numer == 0) {
        if (numer > 0) {
            return '1/' + (deno / numer).toString();
        } else {
            return '-1/' + (-deno / numer).toString();
        }
    }

    let primes = [2, 3];
    function nextPrime(pStart, pMax) {
        if (pStart == 2 && pMax >= 3) return 3;
        outer: for (let i = pStart + 2; i <= pMax; i += 2) {
            for (let p of primes) {
                if (i % p == 0) continue outer;
            }
            primes.push(i);
            return i;
        }
        return false;
    }

    let min = Math.min(Math.abs(numer), deno, Math.abs(Math.abs(numer) - deno));
    let p = 2;
    while (p) {
        if (numer % p == 0 && deno % p == 0) {
            numer /= p;
            deno /= p;
            min /= p;
        } else {
            p = nextPrime(p, min);
        }
    }

    return numer.toString() + '/' + deno.toString();
};

console.log(fractionAddition("7/2+2/3-3/4"));