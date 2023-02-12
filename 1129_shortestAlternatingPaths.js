/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    //前半段存红色，后半段存蓝色
    const g = new Array(n << 1).fill().map(() => new Array());
    redEdges.map(edge => g[edge[0]].push(edge[1] + n)); //前半段（红色）指到后半段（蓝色）
    blueEdges.map(edge => g[edge[0] + n].push(edge[1])); //后半段（蓝色）指到前半段（红色）

    const dist = new Array(n << 1).fill(Infinity);
    dist[0] = dist[n] = 0;

    //广度优先搜索
    const queue = [0, n];
    while (queue.length > 0) {
        const x = queue.shift();
        for (let y of g[x]) {
            if (dist[y] !== Infinity) continue;
            dist[y] = dist[x] + 1;
            queue.push(y);
        }
    }

    return new Array(n).fill().map((_, i) => {
        const min = Math.min(dist[i], dist[n + i]);
        return min === Infinity ? -1 : min;
    });
};