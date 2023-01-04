/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    function triangleArea(p1, p2, p3) {
        const x1 = p1[0] - p2[0];
        const y1 = p1[1] - p2[1];
        const x2 = p1[0] - p3[0];
        const y2 = p1[1] - p3[1];
        return Math.abs(x1 * y2 - y1 * x2) / 2;
    }

    let ans = 0;
    const lenPoints = points.length;
    for (let i = 0; i < lenPoints - 2; i++) {
        for (let j = i + 1; j < lenPoints - 1; j++) {
            for (let k = j + 1; k < lenPoints; k++) {
                const area = triangleArea(points[i], points[j], points[k]);
                ans = Math.max(area, ans);
            }
        }
    }

    return ans;
};