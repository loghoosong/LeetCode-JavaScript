/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.map = new Map();
    nums.forEach((n, index) => {
        if (this.map.has(n)) {
            this.map.get(n).push(index);
        } else {
            this.map.set(n, [index]);
        }
    })
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    const arr = this.map.get(target);
    const r = Math.floor(Math.random() * arr.length);
    return arr[r];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

let obj = new Solution([1, 2, 3, 3, 3]);
console.log(obj.pick(1));
console.log(obj.pick(1));
console.log(obj.pick(2));
console.log(obj.pick(2));
console.log(obj.pick(3));
console.log(obj.pick(3));