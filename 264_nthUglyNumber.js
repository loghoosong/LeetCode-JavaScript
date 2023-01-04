/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    if (n == 1) return 1;
    let uglyArr = [1];
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;
    let ans = 1;
    while (n > 1) {
        let temp2 = uglyArr[index2] * 2;
        let temp3 = uglyArr[index3] * 3;
        let temp5 = uglyArr[index5] * 5;
        if (temp2 <= temp3 && temp2 <= temp5) {
            ans = temp2;
            index2++;
        }
        if (temp3 <= temp2 && temp3 <= temp5) {
            ans = temp3;
            index3++;
        }
        if (temp5 <= temp2 && temp5 <= temp3) {
            ans = temp5;
            index5++;
        }
        uglyArr.push(ans);
        n--;
    }
    return ans;
};