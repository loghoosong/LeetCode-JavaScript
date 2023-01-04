var FreqStack = function () {
    this.freq = new Map();
    this.stacks = [];
    this.maxFreq = 0;

};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
    const f = (this.freq.get(val) || 0) + 1;
    this.freq.set(val, f);
    this.maxFreq = Math.max(f, this.maxFreq);
    if (f > this.stacks.length) {
        this.stacks.push([val]);
    } else {
        this.stacks[f - 1].push(val);
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    const f = this.maxFreq - 1;
    const val = this.stacks[f].pop();
    this.freq.set(val, f);
    if (this.stacks[f].length == 0) this.maxFreq--;
    return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */