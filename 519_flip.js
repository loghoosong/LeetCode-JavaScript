/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function (m, n) {
    this.m = m;
    this.n = n;
    this.size = m * n;
    this.map = new Map();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
    const r = Math.floor(Math.random() * this.size);
    this.size--;
    const index = this.map.get(r) || r;
    this.map.set(r, this.map.get(this.size) || this.size);
    return [Math.trunc(index / this.n), index % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
    this.size = this.m * this.n;
    this.map.clear();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */