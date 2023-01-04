/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num == 0) return '0';
    let negative = false;
    if (num < 0) {
        num = -num - 1;
        negative = true;
    }
    let ans = '';
    while (num > 0) {
        let char = '';
        switch (num % 16) {
            case 15:
                char = negative ? '0' : 'f';
                break;
            case 14:
                char = negative ? '1' : 'e';
                break;
            case 13:
                char = negative ? '2' : 'd';
                break;
            case 12:
                char = negative ? '3' : 'c';
                break;
            case 11:
                char = negative ? '4' : 'b';
                break;
            case 10:
                char = negative ? '5' : 'a';
                break;
            case 9:
                char = negative ? '6' : '9';
                break;
            case 8:
                char = negative ? '7' : '8';
                break;
            case 7:
                char = negative ? '8' : '7';
                break;
            case 6:
                char = negative ? '9' : '6';
                break;
            case 5:
                char = negative ? 'a' : '5';
                break;
            case 4:
                char = negative ? 'b' : '4';
                break;
            case 3:
                char = negative ? 'c' : '3';
                break;
            case 2:
                char = negative ? 'd' : '2';
                break;
            case 1:
                char = negative ? 'e' : '1';
                break;
            case 0:
                char = negative ? 'f' : '0';
        }
        ans = char + ans;
        num = Math.trunc(num / 16);
    }
    if (negative) {
        let len = ans.length;
        while (len < 8) {
            ans = 'f' + ans;
            len++;
        }
    }
    return ans;
};

toHex(-1)