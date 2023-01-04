/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let ans = '';
    let carry = 0;
    function newBinary(n) {
        switch (n) {
            case 3:
                ans = '1' + ans;
                break;
            case 2:
                ans = '0' + ans;
                carry = 1;
                break;
            case 1:
                ans = '1' + ans;
                carry = 0;
                break;
            case 0:
                ans = '0' + ans;
        }
    }

    let lenA = a.length;
    let lenB = b.length;
    let lenMin = lenA < lenB ? lenA : lenB;
    for (let i = 1; i <= lenMin; i++) {
        newBinary(+a[lenA - i] + +b[lenB - i] + carry);
    }
    if (lenA > lenB) {
        for (let i = lenMin + 1; i <= lenA; i++) {
            newBinary(+a[lenA - i] + carry);
        }
    } else {
        for (let i = lenMin + 1; i <= lenB; i++) {
            newBinary(+b[lenB - i] + carry);
        }
    }
    if (carry == 1) newBinary(1);
    return ans;
};