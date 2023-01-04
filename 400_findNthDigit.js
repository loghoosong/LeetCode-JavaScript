/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    let startN, digit, startNum;
    if (n < 10) return n;
    if (n < 190) {
        startN = 10;
        digit = 2;
        startNum = 10;
    } else if (n < 2890) {
        startN = 190;
        digit = 3;
        startNum = 100;
    } else if (n < 38890) {
        startN = 2890;
        digit = 4;
        startNum = 1000;
    } else if (n < 488890) {
        startN = 38890;
        digit = 5;
        startNum = 10000;
    } else if (n < 5888890) {
        startN = 488890;
        digit = 6;
        startNum = 100000;
    } else if (n < 68888890) {
        startN = 5888890;
        digit = 7;
        startNum = 1000000;
    } else if (n < 788888890) {
        startN = 68888890;
        digit = 8;
        startNum = 10000000;
    } else {
        startN = 788888890;
        digit = 9;
        startNum = 100000000;
    }

    let num = startNum + Math.trunc((n - startN) / digit);
    let nth = (n - startN) % digit;
    while (nth > 0) {
        num = num - Math.trunc(num / startNum) * startNum;
        startNum /= 10;
        nth--;
    }
    return Math.trunc(num / startNum);
};