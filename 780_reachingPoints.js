/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
    function convert(px, py, param) {
        if (param) {
            py += px;
        } else {
            px += py;
        }
        return [px, py];
    }

    function equal(p1, p2) {
        return p1[0] == p2[0] && p1[1] == p2[1];
    }

    function over(p1, p2) {
        return p1[0] > p2[0] || p1[1] > p2[1];
    }

    let ans = false;
    let end = [tx, ty];
    function iteator(p) {
        const px = p[0];
        const py = p[1];
        if (equal(p, end)) ans = true;
        if (!over(p, end) && !ans) {
            iteator(convert(px, py, 0));
            iteator(convert(px, py, 1));
        }
    }

    iteator([sx, sy]);
    return ans;
};

console.log(reachingPoints(1, 1, 3000000, 5000000));