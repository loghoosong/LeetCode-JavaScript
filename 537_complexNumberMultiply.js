/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    function complexNumberSplit(n) {
        const addIndex1 = n.indexOf('+');
        const re = +n.slice(0, addIndex1);
        const im = +n.slice(addIndex1 + 1, n.length - 1);
        return [re, im];
    }

    const n1 = complexNumberSplit(num1);
    const n2 = complexNumberSplit(num2);
    const re = n1[0] * n2[0] - n1[1] * n2[1];
    const im = n1[0] * n2[1] + n2[0] * n1[1];
    return re + '+' + im + 'i';
};

console.log(complexNumberMultiply("1+-1i", "0+0i"));