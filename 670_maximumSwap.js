/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }

    const len = digits.length;
    for (let j = len - 1; j > 0; j--) {
        let maxIdx = j;
        let max = digits[maxIdx];
        for (let i = maxIdx - 1; i >= 0; i--) {
            if (digits[i] >= max) {
                max = digits[i];
                maxIdx = i;
            }
        }
        if (digits[maxIdx] != digits[j]) {
            digits[maxIdx] = digits[j];
            digits[j] = max;
            break;
        }
    }

    let ans = 0;
    for (let i = len - 1; i >= 0; i--) {
        ans = ans * 10 + digits[i];
    }
    return ans;
};

console.log(maximumSwap(2736));