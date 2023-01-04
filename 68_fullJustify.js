/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const space = ' ';
    const len = words.length;
    let ans = [];
    let start = 0;
    outer: while (start < len) {
        let l = 0;
        let strArr = [];
        for (let i = start; i < len; i++) {
            l += words[i].length;
            if (l <= maxWidth) {
                strArr.push(words[i]);
                l++;
            } else {
                let str = '';
                let rptSum = maxWidth - l + words[i].length + strArr.length;
                let d = strArr.length - 1;
                for (let s of strArr) {
                    if (d > 0) {
                        let rpt = Math.ceil(rptSum / d);
                        rptSum -= rpt;
                        d--;
                        str += s + space.repeat(rpt);
                    } else {
                        str += s + space.repeat(rptSum);
                    }
                }
                ans.push(str);
                start = i;
                continue outer;
            }
        }
        let str = strArr[0];
        for (let i = 1; i < strArr.length; i++) {
            str += ' ' + strArr[i];
        }
        if (str != '') {
            str += space.repeat(maxWidth - str.length);
            ans.push(str);
        }
        break;
    }

    return ans;
};