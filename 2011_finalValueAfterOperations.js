/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    return operations.reduce((ans, v) => {
        switch (v) {
            case '++X':
            case 'X++':
                return ans + 1;
            case '--X':
            case 'X--':
                return ans - 1;
        }
    }, 0);
};