/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let a = 0;
    let b = 1;
    let c = 1;
    while (n > 2) {
        a = b;
        b = c;
        c = a + b;
        n--;
    }
    return c;
};