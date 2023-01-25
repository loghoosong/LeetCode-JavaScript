/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function (nums, low, high) {
    const BITS = 14;
    function f(arr, max) {
        let trie = new Trie();

        const add = num => {
            let cur = trie;
            for (let i = BITS; i >= 0; i--) {
                const bit = (num >> i) & 1;
                if (!cur.children[bit]) {
                    cur.children[bit] = new Trie();
                }
                cur = cur.children[bit];
                cur.count++;
            }
        }

        const get = (num, x) => {
            let cur = trie;
            let sum = 0;
            for (let i = BITS; i >= 0; i--) {
                const bit = (num >> i) & 1;
                if (0 === ((x >> i) & 1)) {
                    if (!cur.children[bit]) return sum;
                    cur = cur.children[bit];
                } else {
                    if (cur.children[bit]) {
                        sum += cur.children[bit].count;
                    }
                    if (!cur.children[bit ^ 1]) return sum;
                    cur = cur.children[bit ^ 1];
                }
            }
            sum += cur.count;
            return sum;
        }

        let ans = 0;
        for (let i = 1; i < arr.length; i++) {
            add(arr[i - 1]);
            ans += get(arr[i], max);
        }
        return ans;
    }

    return f(nums, high) - f(nums, low - 1);
};

class Trie {
    constructor() {
        this.children = new Array(2).fill(0);
        this.count = 0;
    }
}