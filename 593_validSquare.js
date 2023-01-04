/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    function distance(pa, pb) {
        const x = pa[0] - pb[0];
        const y = pa[1] - pb[1];
        return x * x + y * y;
    }

    const dp12 = distance(p1, p2);
    const dp13 = distance(p1, p3);
    const dp14 = distance(p1, p4);

    if (dp12 == 0 || dp13 == 0 || dp14 == 0) return false;
    if (dp12 != dp13 && dp12 != dp14 && dp14 != dp13) return false;

    if (dp12 != distance(p3, p4)) return false;
    if (dp13 != distance(p2, p4)) return false;
    if (dp14 != distance(p2, p3)) return false;

    return true;
};

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]));