/**
 * @param {number} n
 * @return {number}
 */

var numTrees = function (n) {
    let numTreesMap = new Map();
    numTreesMap.set(0, 1);
    numTreesMap.set(1, 1);
    for (let i = 2; i <= n; i++) {
        let temp = 0;
        for (let j = 0; j < i; j++) {
            temp += numTreesMap.get(j) * numTreesMap.get(i - 1 - j);
        }
        numTreesMap.set(i, temp);
    }
    return numTreesMap.get(n);
};