/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
    if (source === destination) return true;

    let dsu = new Dsu(n);
    edges.map(e => dsu.unite(e[0], e[1]));
    return dsu.connect(source, destination);
};

class Dsu {
    constructor(size) {
        this.parent = new Array(size).fill(0).map((_, i) => i);
        this.size = new Array(size).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    unite(x, y) {
        let rootx = this.find(x);
        let rooty = this.find(y);
        if (rootx === rooty) return;
        if (this.size[rootx] > this.size[rooty]) {
            this.parent[rooty] = rootx;
        } else if (this.size[rootx] < this.size[rooty]) {
            this.parent[rootx] = rooty;
        } else {
            this.parent[rooty] = rootx;
            this.size[rootx]++;
        }
    }

    connect(x, y) {
        return this.find(x) === this.find(y);
    }
}