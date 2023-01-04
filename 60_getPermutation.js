/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let ans = '';

    let fn = 1;
    let nArr = [1];
    for (let i = 1; i < n; i++) {
        fn *= i;
        nArr[i] = i + 1;
    }

    k--;
    while (n > 0) {
        let temp = Math.trunc(k / fn);
        ans += nArr[temp];
        nArr.splice(temp, 1);
        k = k - fn * temp;
        n--;
        fn /= n;
    }
    return ans;
};