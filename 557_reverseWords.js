/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    function reverse(word) {
        let arr = Array.from(word)
        let s = 0, e = arr.length - 1;
        while (s < e) {
            const temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
        return arr.join('');
    }

    let arr = s.split(' ');
    arr = arr.map(word => reverse(word));
    return arr.join(' ');
};