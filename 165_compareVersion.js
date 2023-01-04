/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    function toNum(str) {
        if (!str) return 0;
        let ans = 0;
        for (let i = 0; i < str.length; i++) {
            ans = ans * 10 + + str[i];
        }
        return ans;
    }

    function* reversions(version) {
        let from = 0;
        for (let i = 0; i < version.length; i++) {
            if (version[i] == '.') {
                yield version.slice(from, i);
                from = i + 1;
            }
        }
        if (from < version.length) yield version.slice(from);
    }

    let g1 = reversions(version1), g2 = reversions(version2);
    let re1 = g1.next(), re2 = g2.next();
    while (!re1.done || !re2.done) {
        if (toNum(re1.value) > toNum(re2.value)) {
            return 1;
        } else if (toNum(re1.value) < toNum(re2.value)) {
            return -1;
        }
        re1 = g1.next();
        re2 = g2.next();
    }
    return 0;
};