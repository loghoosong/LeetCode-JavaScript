/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    const connected = new Array(n).fill().map(() => new Array(n).fill(0));
    const degree = new Array(n).fill(0);
    roads.map(road => {
        connected[road[0]][road[1]] = 1;
        connected[road[1]][road[0]] = 1;
        degree[road[0]]++;
        degree[road[1]]++;
    });

    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
        if (degree[i] < (ans >> 1)) continue
        for (let j = i + 1; j < n; j++) {
            const rank = degree[i] + degree[j] - connected[i][j];
            ans = Math.max(ans, rank);
        }
    }
    return ans;
};