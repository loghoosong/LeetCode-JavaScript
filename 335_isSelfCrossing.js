/**
 * @param {number[]} distance
 * @return {boolean}
 */
var isSelfCrossing = function (distance) {
    let len = distance.length;
    if (len < 4) return false;

    if (distance[3] >= distance[1] && distance[2] <= distance[0]) return true;
    if (len >= 5) {
        if (distance[4] >= distance[2] && distance[3] <= distance[1]) return true;
        if (distance[3] == distance[1] && distance[4] >= distance[2] - distance[0]) return true;

        for (let i = 5; i < len; i++) {
            if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3]) return true;

            if (distance[i - 2] > distance[i - 4] && distance[i - 3] > distance[i - 1]) {
                if (distance[i] >= distance[i - 2] - distance[i - 4] && distance[i - 1] + distance[i - 5] >= distance[i - 3]) return true;
            }
        }
    }
    return false
};