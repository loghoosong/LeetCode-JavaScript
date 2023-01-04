/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.len = w.length;
    let sum = 0;
    for (let i = 0; i < this.len; i++) {
        sum += w[i];
        w[i] = [w[i], i]
    }
    w.sort((a, b) => a[0] - b[0]);
    const average = sum / this.len;

    let start = 0;
    let end = this.len - 1;
    while (start <= end) {
        const mid = (start + end) >> 1;
        if (w[mid][0] > average) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    this.aliases = [];
    for (let i = 0; i < this.len; i++) {
        let item;
        if (start < this.len) {
            item = [w[i][0] / average, w[i][1], w[start][1]];
            w[start][0] -= (average - w[i][0]);
            if (w[start][0] <= average) start++;
        } else {
            item = [1, w[i][1], NaN];
        }
        this.aliases.push(item)
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const r = Math.random() * this.len;
    const p = r - Math.trunc(r);
    const bucket = this.aliases[Math.trunc(r)];
    if (p > bucket[0]) {
        return bucket[2];
    } else {
        return bucket[1];
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

let obj = new Solution([1, 7, 7, 6, 7, 1])
let m = new Map();
for (let i = 0; i < 10000; i++) {
    const p = obj.pickIndex();
    const counter = m.get(p) + 1 || 0;
    m.set(p, counter);
}
console.log(m);