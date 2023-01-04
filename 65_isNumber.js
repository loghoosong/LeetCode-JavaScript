/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    function judge(str, canDot = true, canE = true) {
        let atLeastOneNumber = false;
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '+' || str[i] == '-') {
                if (i != 0) return false;
            } else if (str[i] == '.') {
                if (canDot) {
                    canDot = false;
                } else {
                    return false;
                }
            } else if (str[i] >= '0' && str[i] <= '9') {
                atLeastOneNumber = true;
            } else if (str[i] == 'e' || str[i] == 'E') {
                if (canE && atLeastOneNumber) {
                    return judge(str.slice(i + 1), false, false);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        return atLeastOneNumber;
    }

    return judge(str);
};