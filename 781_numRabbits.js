/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let rabbits = 0;
    let map = new Map();
    for (let ans of answers) {
        let remain = map.get(ans) || 0;
        if (remain > 0) {
            map.set(ans, remain - 1);
        } else {
            map.set(ans, ans);
            rabbits += (ans + 1);
        }
    }
    return rabbits;
};