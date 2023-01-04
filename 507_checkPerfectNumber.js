/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let mid = Math.trunc(Math.sqrt(num));
    let arr = [1];
    for (let i = 2; i <= mid; i++) {
        if (num % i == 0) {
            arr.push(i);
            arr.push(num / i);
        }
    }
    if (mid * mid == num) arr.pop();
    return num == arr.reduce((sum, item) => sum + item, 0);
};