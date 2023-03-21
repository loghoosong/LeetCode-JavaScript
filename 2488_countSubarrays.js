/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    class Counter {
        constructor() {
            this.cnt = 0;
            this.map = new Map();
        }
        get(num) {
            return this.map.get(num) || 0;
        }
        count(num) {
            if (num > k) {
                this.cnt++;
            } else if (num < k) {
                this.cnt--;
            }
            this.map.set(this.cnt, this.get(this.cnt) + 1);
        }
        keys() {
            return this.map.keys()
        }
    }

    const kIdx = nums.indexOf(k);

    let leftCnt = new Counter();
    for (let i = kIdx; i >= 0; i--) {
        leftCnt.count(nums[i]);
    }

    let rightCnt = new Counter();
    for (let i = kIdx; i < nums.length; i++) {
        rightCnt.count(nums[i])
    }

    let ans = 0;
    for (let k of leftCnt.keys()) {
        ans += leftCnt.get(k)
            * (rightCnt.get(-k) + rightCnt.get(1 - k));
    }

    return ans;
};
