/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n < 10) return 1;

    let firstBit = n;
    let small = 0;
    let powerOfTen = 1;
    do {
        powerOfTen *= 10;
        firstBit = Math.trunc(n / powerOfTen);
        small = n - firstBit * powerOfTen;
    } while (firstBit >= 10);

    if (firstBit == 1) {
        return small + 1 + firstBit * countDigitOne(powerOfTen - 1) + countDigitOne(small);
    } else {
        return powerOfTen + firstBit * countDigitOne(powerOfTen - 1) + countDigitOne(small);
    }
};