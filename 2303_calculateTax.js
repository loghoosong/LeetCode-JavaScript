/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
    let tax = 0, lastUpper = 0;
    for (let i = 0; i < brackets.length; i++) {
        if (income <= brackets[i][0]) {
            tax += (income - lastUpper) * brackets[i][1];
            return tax / 100;
        }
        tax += (brackets[i][0] - lastUpper) * brackets[i][1];
        lastUpper = brackets[i][0];
    }

    return tax / 100;
};