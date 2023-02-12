/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
    const len = arr.length;
    const visited = new Array(len).fill(false);

    function jump(i) {
        if (i < 0 || i >= len || visited[i]) return false;
        if (arr[i] === 0) return true;

        visited[i] = true;
        return jump(i + arr[i]) || jump(i - arr[i]);
    }

    return jump(start);
};