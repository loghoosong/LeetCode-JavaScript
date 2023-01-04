/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let ans = 1;
    let upCount = 1, downCount = 1, temp = 1;
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            upCount++;
            temp = upCount;
            downCount = 1
            ans += upCount;
        } else if (ratings[i] < ratings[i - 1]) {
            ans += downCount;
            if (downCount >= temp) ans++;
            downCount++;
            upCount = 1;
        } else {
            upCount = 1;
            downCount = 1;
            temp = 1;
            ans++;
        }
        console.log(ans);
    }

    return ans;
};