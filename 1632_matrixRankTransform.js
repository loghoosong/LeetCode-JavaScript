/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function (matrix) {
    //并查集
    const UnionFind = function (size) {
        this.set = new Array(size).fill().map((_, index) => index);
    }
    UnionFind.prototype.find = function (x) {
        if (this.set[x] !== x) {
            this.set[x] = this.find(this.set[x]);
        }
        return this.set[x];
    }
    UnionFind.prototype.union = function (x, y) {
        this.set[this.find(x)] = this.find(y);
    }

    const m = matrix.length, n = matrix[0].length;
    const total = m * n;
    const id = (i, j) => i * n + j;

    const uf = new UnionFind(total);//并查集
    const g = new Array(total).fill().map(() => new Array());//图
    const degree = new Array(total).fill(0);//入度
    const ufInit = sorted => {
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i][0] === sorted[i - 1][0]) {
                uf.union(sorted[i][1], sorted[i - 1][1]);
            }
        }
    }
    const gInit = sorted => {
        for (let i = 1; i < sorted.length; i++) {
            if (sorted[i][0] > sorted[i - 1][0]) {
                const u = uf.find(sorted[i][1]),
                    v = uf.find(sorted[i - 1][1]);
                degree[u]++;
                g[v].push(u);
            }
        }
    }

    //分别对行、列，先并查，再构建图
    const rows = [], cols = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push([matrix[i][j], id(i, j)]);
        }
        row.sort((a, b) => a[0] - b[0]);
        rows.push(row);
        ufInit(row);
    }
    for (let j = 0; j < n; j++) {
        const col = [];
        for (let i = 0; i < m; i++) {
            col.push([matrix[i][j], id(i, j)]);
        }
        col.sort((a, b) => a[0] - b[0]);
        cols.push(col);
        ufInit(col);
    }
    rows.map(row => gInit(row));
    cols.map(col => gInit(col));

    //拓扑排序bfs
    const ans = new Array(total);
    let queue = [];
    let rank = 1;
    for (let i = 0; i < total; i++) {
        if (uf.find(i) === i && degree[i] === 0) {
            queue.push(i);
            ans[i] = rank;
        }
    }

    while (queue.length !== 0) {
        const temp = [];
        rank++;
        for (let p of queue) {
            for (let e of g[p]) {
                if (--degree[e] === 0) {
                    temp.push(e);
                    ans[e] = rank;
                }
            }
        }
        queue = temp;
    }

    const ret = new Array(m).fill().map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ret[i][j] = ans[uf.find(id(i, j))];
        }
    }
    return ret;
};