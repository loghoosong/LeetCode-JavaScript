/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
    let ans = [];

    for (let x = 1, y = 1000; x <= 1000 & y >= 1; x++) {
        while (y >= 1 && customfunction.f(x, y) > z) {
            y--;
        }
        if (y >= 1 && customfunction.f(x, y) === z) {
            ans.push([x, y]);
        }
    }

    return ans;
};