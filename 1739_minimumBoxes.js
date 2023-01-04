/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function (n) {
    const f = n => n * (n + 1) / 2;
    const g = n => n * (n + 1) * (n + 2) / 6;

    let floor = 1;
    for (; g(floor) < n; floor++) { }
    n -= g(floor - 1);

    let add = 0;
    for (; f(add) < n; add++) { }
    return f(floor - 1) + add;
};