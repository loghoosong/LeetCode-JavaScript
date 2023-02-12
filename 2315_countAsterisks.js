/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    const count = (cnt, str) => {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '*') cnt++;
        }
        return cnt;
    }

    return s.split(/\|.*?\|/).reduce(count, 0);
};