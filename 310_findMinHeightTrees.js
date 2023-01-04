/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n === 1) return [0];

    let dgree = new Array(n).fill(0);
    let adj = new Array(n).fill(0).map(() => new Array());

    for (let i = 0; i < n - 1; i++) {
        const a = edges[i][0], b = edges[i][1];
        adj[a].push(b);
        dgree[a]++;
        adj[b].push(a);
        dgree[b]++;
    }

    let queue = [];
    dgree.map((d, i) => {
        if (d === 1) queue.push(i);
    });

    let remainCount = n;
    while (remainCount > 2) {
        let temp = new Array();
        remainCount -= queue.length;
        queue.map(cur => {
            adj[cur].map(p => {
                dgree[p]--;
                if (dgree[p] === 1) temp.push(p);
            });
        });
        queue = temp;
    }

    return queue;
};