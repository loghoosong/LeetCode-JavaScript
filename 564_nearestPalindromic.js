/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
    if (n == '1') return '0';

    function createPalindromic(num) {
        if (num == '0') num = '';
        let len = n.length - midIndex;
        for (let i = 0; i < len; i++) {
            if (len - i - 1 < num.length) {
                num += num[len - i - 1];
            } else {
                num += '9';
            }
        }
        return num;
    }

    const num = BigInt(n);
    const midIndex = (n.length + 1) >> 1;
    const leftHalf = +n.slice(0, midIndex);
    const leftHalfAdd = leftHalf + 1;
    const leftHalfMinus = leftHalf - 1;

    const newNum = BigInt(createPalindromic(leftHalf.toString()));
    const diff = num > newNum ? num - newNum : newNum - num;
    //console.log('newNum  ' + newNum);

    const newNumAdd = BigInt(createPalindromic(leftHalfAdd.toString()));
    const diffAdd = newNumAdd - num;
    //console.log('newNumAdd    ' + newNumAdd);

    const newNumMinus = BigInt(createPalindromic(leftHalfMinus.toString()));
    const diffMinus = num - newNumMinus;
    //console.log('newNumMinus    ' + newNumMinus);

    if (newNum == num) {
        if (diffMinus <= diffAdd) {
            return newNumMinus.toString();
        } else {
            return newNumAdd.toString();
        }
    } else {
        if (diff > diffAdd && diffMinus > diffAdd) {
            return newNumAdd.toString();
        } else if (diffMinus > diff && diff <= diffAdd) {
            return newNum.toString();
        } else {
            return newNumMinus.toString();
        }
    }
};
console.log(nearestPalindromic('807045053224792883'));