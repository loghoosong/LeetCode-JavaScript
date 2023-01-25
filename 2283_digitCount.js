/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    const cntArr = new Array(num.length).fill(0);
    for (let i = 0; i < num.length; i++) {
        cntArr[+num[i]]++;
    }

    for (let i = 0; i < num.length; i++) {
        if (num[i] != cntArr[i]) return false;
    }
    return true;
};