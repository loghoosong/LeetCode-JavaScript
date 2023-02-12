/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.stack = [];
    this.size = size;
    this.movingSum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.stack.push(val);
    this.movingSum += val;
    if (this.stack.length > this.size) {
        this.movingSum -= this.stack[this.stack.length - this.size - 1];
        return this.movingSum / this.size;
    }
    return this.movingSum / this.stack.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */