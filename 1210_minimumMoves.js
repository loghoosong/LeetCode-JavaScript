/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
    const len = grid.length;

    //记录移动步数的数组
    const half = len * len;
    const dist = new Array(half << 1).fill(-1);
    dist[0] = 0;
    const setDist = (r, c, status, d) => {
        const idx = status === 0 ? r * len + c : r * len + c + half;
        dist[idx] = d;
    }
    const getDist = (r, c, status) => {
        const idx = status === 0 ? r * len + c : r * len + c + half;
        return dist[idx];
    }

    //可进行的移动
    const moves = {
        moveRight: function (r, c, status) {
            const nextD = getDist(r, c + 1, status);
            if (nextD === -1 && c + 2 - status < len
                && grid[r][c + 2 - status] === 0 && grid[r + status][c + 2 - status] === 0) {
                setDist(r, c + 1, status, getDist(r, c, status) + 1);
                return [r, c + 1, status];
            }
            return null;
        },

        moveDown: function (r, c, status) {
            const nextD = getDist(r + 1, c, status);
            if (nextD === -1 && r + 1 + status < len
                && grid[r + 1 + status][c] === 0 && grid[r + 1 + status][c + 1 - status] === 0) {
                setDist(r + 1, c, status, getDist(r, c, status) + 1);
                return [r + 1, c, status];
            }
            return null;
        },

        rotate: function (r, c, status) {
            const nextD = getDist(r, c, 1 - status);
            if (nextD === -1 && r + 1 - status < len && c + status < len
                && grid[r + 1 - status][c + status] === 0 && grid[r + 1][c + 1] === 0) {
                setDist(r, c, 1 - status, getDist(r, c, status) + 1);
                return [r, c, 1 - status];
            }
            return null;
        }
    };

    //广度优先遍历
    const queue = [[0, 0, 0]];
    while (queue.length) {
        const snake = queue.shift();
        for (let move in moves) {
            const next = moves[move](snake[0], snake[1], snake[2]);
            if (next) queue.push(next);
        }
    }

    return getDist(len - 1, len - 2, 0);
};