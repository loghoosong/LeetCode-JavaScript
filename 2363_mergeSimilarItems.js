/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    const map = new Map(items1);
    items2.map(item => {
        const weight = map.get(item[0]) || 0;
        map.set(item[0], weight + item[1]);
    });

    return Array.from(map).sort((a, b) => a[0] - b[0]);
};