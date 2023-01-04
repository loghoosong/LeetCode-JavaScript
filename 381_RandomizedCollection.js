var RandomizedCollection = function () {
    this.nums = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    const has = this.map.has(val);
    const len = this.nums.length;
    if (!has) {
        let set = new Set([len]);
        this.map.set(val, set);
    } else {
        let set = this.map.get(val);
        set.add(len);
        this.map.set(val, set);
    }
    this.nums.push(val);
    return !has;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;
    const len = this.nums.length;
    let set = this.map.get(val);
    let index = NaN;
    for (let i of set) {
        if (i != undefined) {
            index = i;
            break;
        }
    }
    this.nums[index] = this.nums[len - 1];
    this.nums.pop();
    set.delete(index);
    if (set.size == 0) {
        this.map.delete(val);
    } else {
        this.map.set(val, set);
    }

    if (index != (len - 1)) {
        const lastVal = this.nums[index];
        set = this.map.get(lastVal);
        this.map.set(lastVal, set);
    }

    return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    const r = Math.trunc(Math.random() * this.nums.length);
    return this.nums[r];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */