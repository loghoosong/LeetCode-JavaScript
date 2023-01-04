/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let arr = Array.from(str);
        arr.sort();
        const sorted = arr.join();
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            map.set(sorted, [str])
        }
    }

    return Array.from(map.values());
};