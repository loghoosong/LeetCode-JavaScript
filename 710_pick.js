/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
    this.len = n - blacklist.length;
    this.map = new Map();
    blacklist.forEach(b => this.map.set(b, undefined));

    let idx = this.len;
    for (let black of this.map.keys()) {
        while (this.map.has(idx)) {
            idx++;
        }
        if (black < this.len) {
            this.map.set(black, idx);
            idx++;
        }
    }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
    const r = Math.floor(Math.random() * this.len);
    return this.map.get(r) || r;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */