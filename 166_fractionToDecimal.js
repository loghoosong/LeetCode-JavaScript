/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
    let integer = Math.trunc(numerator / denominator);
    numerator -= denominator * integer;
    let ans = integer.toString();
    if (numerator == 0) return ans;

    if ((numerator ^ denominator) < 0 && ans == '0') ans = '-' + ans;

    let decimal = ''
    let numeratorMap = new Map();
    let counter = 0;
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    while (true) {
        numerator = Math.trunc(10 * numerator);
        if (numeratorMap.has(numerator)) {
            let index = numeratorMap.get(numerator);
            decimal = decimal.slice(0, index) + '(' + decimal.slice(index) + ')';
            return ans + '.' + decimal;
        } else {
            numeratorMap.set(numerator, counter);
        }

        let temp = Math.trunc(numerator / denominator);
        decimal += temp.toString();
        numerator -= denominator * temp;
        if (numerator == 0) return ans + '.' + decimal;

        counter++;
    }
};