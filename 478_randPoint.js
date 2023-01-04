/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
    this.radius = radius;
    this.x_center = x_center;
    this.y_center = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
    let r, alpha;
    do {
        r = Math.random() * 2;
    } while (r > 1)
    r = Math.sqrt(r) * this.radius;
    alpha = Math.random() * 2 * Math.PI;
    return [this.x_center + r * Math.cos(alpha), this.y_center + r * Math.sin(alpha)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */