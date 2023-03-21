/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    const map = new Map();
    nums.map(n => {
        const cnt = map.get(n) || 0;
        map.set(n, cnt + 1);
    });

    let pairs = 0, singles = 0;
    for (let cnt of map.values()) {
        pairs += (cnt >> 1);
        singles += (cnt & 1);
    }
    return [pairs, singles];
};