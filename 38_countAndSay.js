/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) return '' + 1;

    const str = countAndSay(n - 1);
    const len = str.length;

    let ans = '';
    let start = 0;
    while (start < len) {
        let num = str[start];
        let end = start + 1;
        while (end < len && str[end] == num) {
            end++;
        }
        ans = ans + (end - start) + num;
        start = end;
    }

    return ans;
};


for (let i = 1; i <= 30; i++) {
    console.log('i = ' + i);
    console.log(countAndSay(i));
}