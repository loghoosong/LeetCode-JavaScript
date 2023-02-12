/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
    const toMinute = t =>
        t[0] * 600 + t[1] * 60 + t[3] * 10 + +t[4];

    const map = new Map();
    for (let i = 0; i < keyName.length; i++) {
        if (map.has(keyName[i])) {
            map.get(keyName[i]).push(toMinute(keyTime[i]));
        } else {
            map.set(keyName[i], [toMinute(keyTime[i])]);
        }
    }

    let ans = [];
    for (let k of map.keys()) {
        const v = map.get(k);
        v.sort((a, b) => a - b);
        for (let i = 0; i < v.length - 2; i++) {
            if (v[i + 2] - v[i] <= 60) {
                ans.push(k);
                break;
            }
        }
    }
    ans.sort();
    return ans;
};