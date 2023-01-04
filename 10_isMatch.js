/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    function iteator(res, target) {
        const lenT = target.length;
        const lenR = res.length;

        let i = 1;
        for (; i <= lenT; i++) {
            if (target[lenT - i] == '.') continue;
            if (target[lenT - i] == '*') {
                const char = target[lenT - i - 1];
                let countOfChar = 0;
                if (char == '.') {
                    countOfChar = lenR - i + 1;
                } else {
                    for (let j = lenR - i; j >= 0; j--) {
                        if (res[j] == char) {
                            countOfChar++
                        } else {
                            break;
                        }
                    }
                }

                let t = target.slice(0, lenT - i - 1);
                for (let j = 0; j <= countOfChar; j++) {
                    if (iteator(res.slice(0, lenR - i + 1), t)) return true;
                    t += char;
                }
                return false;
            } else if (lenR - i < 0 || target[lenT - i] != res[lenR - i]) {
                return false;
            }
        }

        return lenR == i - 1;
    }

    return iteator(s, p);
};