/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function (n, edgeList, queries) {
    edgeList.sort((a, b) => a[2] - b[2]);

    const idxArr = queries.map((v, i) => i);//实际是对queries进行排序
    idxArr.sort((a, b) => queries[a][2] - queries[b][2]);

    //并查集
    let uf = new Array(n).fill(0).map((v, i) => i);
    function find(uf, x) {
        if (uf[x] === x) return x;
        return uf[x] = find(uf, uf[x]);
    }
    function merge(uf, x, y) {
        x = find(uf, x);
        y = find(uf, y);
        uf[y] = x;
    }

    let ans = new Array(queries.length).fill(false);
    let k = 0;
    for (let i of idxArr) {
        while (k < edgeList.length && edgeList[k][2] < queries[i][2]) {
            merge(uf, edgeList[k][0], edgeList[k][1]);
            k++;
        }
        ans[i] = find(uf, queries[i][0]) == find(uf, queries[i][1]);
    }
    return ans;
};