/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    let ans = [];
    function iterator(arr, res, index, mul) {
        if (index == num.length && res == target) ans.push(arr.join(''));
        let temp = +num[index];
        for (let i = index; i < num.length; i++) {
            if (index == 0) {
                iterator(arr.concat([temp]), +res + temp, i + 1, temp);
            } else {
                iterator(arr.concat(['+', temp]), +res + temp, i + 1, temp);
                iterator(arr.concat(['-', temp]), res - temp, i + 1, -temp);
                iterator(arr.concat(['*', temp]), res - mul + mul * temp, i + 1, mul * temp);
            }
            if (temp == 0) break;
            temp = temp * 10 + +num[i + 1];
        }
    }

    iterator([], 0, 0, 0);
    return ans;
};