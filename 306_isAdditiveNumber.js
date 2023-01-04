/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
    const len = num.length;
    function isValid(secondStart, secondEnd) {
        let first = +num.slice(0, secondStart);
        let second = +num.slice(secondStart, secondEnd + 1);
        while (secondEnd < len) {
            const thrid = first + second;
            let thridEnd = secondEnd + 1;
            if (thrid > 0) thridEnd += Math.trunc(Math.log10(thrid));

            if (thridEnd >= len) return false;
            if (num.slice(secondEnd + 1, thridEnd + 1) != thrid) return false;
            if (thridEnd === len - 1) return true;

            [first, second, secondEnd] = [second, thrid, thridEnd];
        }
    }

    for (let i = 1; i <= (len >> 1); i++) {
        if (num[0] === '0' && i > 1) break;
        for (let j = i; j < len - i; j++) {
            if (num[i] === '0' && j > i) break;
            if (isValid(i, j)) return true;
        }
    }
    return false;
};