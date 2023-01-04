/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let ans = 0;
    let addNum = 0;
    let lastNum = 1000;
    for (let char of s) {
        switch (char) {
            case 'M':
                addNum = 1000;
                break;
            case 'D':
                addNum = 500;
                break;
            case 'C':
                addNum = 100;
                break;
            case 'L':
                addNum = 50;
                break;
            case 'X':
                addNum = 10;
                break;
            case 'V':
                addNum = 5;
                break;
            case 'I':
                addNum = 1;
        }
        ans += addNum;
        if (addNum > lastNum) ans -= (lastNum << 1)
        lastNum = addNum;
    }
    return ans;
};