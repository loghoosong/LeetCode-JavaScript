/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    this.size = Math.trunc(Math.sqrt(nums.length));
    this.arr = new Array(Math.ceil(nums.length / this.size)).fill(0);
    nums.map((n, i) => {
        const idx = Math.trunc(i / this.size);
        this.arr[idx] += n;
    });
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
    this.arr[Math.trunc(index / this.size)] += val - this.nums[index];
    this.nums[index] = val;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0;
    const l = Math.trunc(left / this.size);
    const r = Math.trunc(right / this.size);
    if (l === r) {
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
    } else {
        for (let i = left; i < (l + 1) * this.size; i++) {
            sum += this.nums[i];
        }
        for (let i = l + 1; i < r; i++) {
            sum += this.arr[i];
        }
        for (let i = r * this.size; i <= right; i++) {
            sum += this.nums[i];
        }
    }

    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */