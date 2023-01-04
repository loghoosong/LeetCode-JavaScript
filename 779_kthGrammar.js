/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    if (k == 1) return 0;
    if (k == 2) return 1;

    const mid = 1 << (n - 2);
    if (k > mid) {
        return +!kthGrammar(n - 1, k - mid);
    } else {
        return kthGrammar(n - 1, k);
    }
};