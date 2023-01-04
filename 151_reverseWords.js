/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(' ').filter(w => w != '');
    arr.reverse();
    return arr.join(' ');
};