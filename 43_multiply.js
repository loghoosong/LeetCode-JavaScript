/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let multiNums = [];
    let l1 = num1.length;
    let l2 = num2.length;
    for (let j = 0; j < l2; j++) {
        for (let i = 0; i < l1; i++) {
            if (multiNums.length <= i + j) {
                multiNums[i + j] = +num1[l1 - i - 1] * +num2[l2 - j - 1];
            } else {
                multiNums[i + j] += +num1[l1 - i - 1] * +num2[l2 - j - 1];
            }
        }
    }

    let carry = 0;
    for (let i = 0; i < multiNums.length; i++) {
        multiNums[i] += carry;
        carry = Math.trunc(multiNums[i] / 10);
        multiNums[i] %= 10;
    }
    if (carry > 0) {
        multiNums.push(carry);
    } else {
        for (let i = multiNums.length - 1; i > 0; i--) {
            if (multiNums[i] == 0) {
                multiNums.pop();
            } else {
                break;
            }
        }
    }
    return multiNums.reverse().join('');
};