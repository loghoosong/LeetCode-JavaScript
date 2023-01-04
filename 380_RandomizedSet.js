var RandomizedSet = function () {
    this.nums = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false;
    const len = this.nums.length;
    this.nums.push(val);
    this.map.set(val, len);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;
    const len = this.nums.length;
    const index = this.map.get(val);
    this.map.set(this.nums[len - 1], index)
    this.nums[index] = this.nums[len - 1];
    this.nums.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const r = Math.trunc(Math.random() * this.nums.length);
    return this.nums[r];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */