/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
    function iteator(str) {
        let e = ';';
        switch (str[0]) {
            case 'f':
                return false;
            case 't':
                return true;
            case '!':
                e = str.slice(2, str.length - 1)
                return !iteator(e);
            case '&':
                e = str.slice(2, str.length - 1);
                return and(mySplit(e));
            case '|':
                e = str.slice(2, str.length - 1);
                return or(mySplit(e));
        }
    }

    function mySplit(str) {
        let arr = [];
        let leftCount = 0;
        let item = '';
        for (let char of str) {
            if (leftCount == 0 & char == ',') {
                arr.push(item);
                item = '';
            } else {
                item += char;
                if (char == '(') {
                    leftCount++;
                } else if (char == ')') {
                    leftCount--;
                }
            }
        }
        arr.push(item);

        return arr;
    }

    function and(arr) {
        for (let e of arr) {
            if (!iteator(e)) return false;
        }
        return true;
    }

    function or(arr) {
        for (let e of arr) {
            if (iteator(e)) return true;
        }
        return false;
    }

    return iteator(expression);
};