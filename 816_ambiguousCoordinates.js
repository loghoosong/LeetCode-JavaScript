/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
    function writeCoorinates(xArr, yArr) {
        let ret = [];
        for (let x of xArr) {
            for (let y of yArr) {
                ret.push('(' + x + ', ' + y + ')');
            }
        }
        return ret;
    }

    function legalNums(str) {
        const len = str.length;
        if (len == 1) return [+str];
        if (str[len - 1] == '0' && str[0] == '0') return []
        if (str[len - 1] == '0') return [+str];
        if (str[0] == '0') {
            const withDot = '0.' + str.slice(1);
            return [+withDot];
        }

        let ret = [+str];
        for (let i = 1; i < len; i++) {
            const withDot = str.slice(0, i) + '.' + str.slice(i);
            ret.push(+withDot);
        }

        return ret;
    }

    let ret = [];
    const len = s.length;
    for (let i = 2; i < len - 1; i++) {
        const xArr = legalNums(s.slice(1, i));
        const yArr = legalNums(s.slice(i, len - 1));
        ret = ret.concat(writeCoorinates(xArr, yArr));
    }
    return ret;
};