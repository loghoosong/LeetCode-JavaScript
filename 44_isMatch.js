/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    function myFindFirst(target, from = 0) {
        const len1 = s.length;
        const len2 = target.length;
        if (len2 == 0) return [from];
        outer: for (let i = from; i <= len1 - len2; i++) {
            for (let j = 0; j < len2; j++) {
                if (target[j] == '?') continue;
                if (target[j] != s[i + j]) {
                    continue outer;
                }
            }
            return i;
        }
        return -1;
    }

    function myFindLast(target, from = s.length - 1) {
        const len = target.length;
        if (len == 0) return [from];

        outer: for (let i = from; i >= len - 1; i--) {
            for (let j = 0; j < len; j++) {
                if (target[len - 1 - j] == '?') continue;
                if (target[len - 1 - j] != s[i - j]) {
                    continue outer;
                }
            }
            return i;
        }
        return -1;
    }

    let pArr = p.split('*');
    const pLen = pArr.length;
    let start = 0;
    start = +myFindFirst(pArr[0], start);
    if (start != 0) return false;//头部对齐
    start += pArr[0].length;

    for (let i = 1; i < pLen - 1; i++) {
        start = +myFindFirst(pArr[i], start);
        if (start == -1) {
            return false;
        } else {
            start += pArr[i].length;
        }
    }

    //尾部对齐
    if (pLen == 1) {
        return p.length == s.length;
    } else {
        console.log(start);
        if (pArr[pLen - 1] == '') return true;
        if (myFindLast(pArr[pLen - 1]) != s.length - 1) return false;
        if (start > s.length - pArr[pLen - 1].length) return false;
        return true;
    }
};