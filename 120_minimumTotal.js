/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (triangle.length == 0) return triangle[0][0];

    let minArr = triangle[0];
    for (let row = 1; row < triangle.length; row++) {
        let addArr = new Array(row + 1);
        addArr[0] = triangle[row][0] + minArr[0];
        addArr[row] = triangle[row][row] + minArr[row - 1];
        for (let i = 1; i < row; i++) {
            addArr[i] = triangle[row][i] + Math.min(minArr[i - 1], minArr[i]);
        }
        minArr = addArr;
    }

    return Math.min(...minArr);
};