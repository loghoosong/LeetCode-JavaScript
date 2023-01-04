/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    function iterator(str) {
        if (!isNaN(str)) return [+str];

        let ans = [];
        for (let i = 1; i < str.length - 1; i++) {
            if (isNaN(str[i])) {
                ans = ans.concat(myArrCompute(iterator(str.slice(0, i)), iterator(str.slice(i + 1)), str[i]));
            }
        }
        return ans;
    }

    function myArrCompute(arr1, arr2, op) {
        let ans = [];
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                switch (op) {
                    case '+':
                        ans.push(arr1[i] + arr2[j]);
                        break;
                    case '-':
                        ans.push(arr1[i] - arr2[j]);
                        break;
                    case '*':
                        ans.push(arr1[i] * arr2[j]);
                }
            }
        }
        return ans;
    }

    return iterator(expression);
};