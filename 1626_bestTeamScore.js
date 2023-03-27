/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
    const players = scores.map((s, i) => [ages[i], s]);
    players.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    const len = scores.length;
    const dp = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (players[j][1] <= players[i][1]) {
                dp[i] = Math.max(dp[i], dp[j]);
            }
        }
        dp[i] += players[i][1];
    }

    return Math.max(...dp);
};