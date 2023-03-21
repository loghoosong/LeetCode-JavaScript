/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function (n, edges) {
    const adj = new Array(n).fill().map(() => new Array());
    edges.map(edge => {
        const x = edge[0] - 1, y = edge[1] - 1;
        adj[x].push(y);
        adj[y].push(x);
    });

    const dfs = (adj, parent, u, mask) => {
        let depth = 0;
        for (let v of adj[u]) {
            if (v !== parent && (mask & (1 << v)) !== 0) {
                depth = Math.max(depth, 1 + dfs(adj, u, v, mask));
            }
        }
        return depth;
    }

    const ans = new Array(n - 1).fill(0);
    for (let i = 1; i < (1 << n); i++) {
        const x = 32 - Math.clz32(i) - 1;
        const queue = [x];
        let y = -1;

        //判断i对应的数，是否是联通的
        let mask = i;
        mask &= ~(1 << x);
        while (queue.length) {
            y = queue.shift();
            for (let v of adj[y]) {
                if ((mask & (1 << v)) !== 0) {
                    mask &= ~(1 << v);
                    queue.push(v);
                }
            }
        }

        if (mask === 0) {
            //计算直径
            const diameter = dfs(adj, -1, y, i);
            if (diameter > 0) ans[diameter - 1]++;
        }
    }

    return ans;
};