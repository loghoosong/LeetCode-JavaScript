/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let map = new Map();
    logs.map(log => {
        if (!map.has(log[0])) {
            map.set(log[0], new Set());
        }
        map.get(log[0]).add(log[1]);
    });

    const ans = new Array(k).fill(0);
    for (let v of map.values()) {
        ans[v.size - 1]++;
    }
    return ans;
};