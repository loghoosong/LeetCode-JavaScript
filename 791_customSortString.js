/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i);
    }

    let arr = s.split('');
    arr.sort((a, b) => (map.get(a) || 0) - (map.get(b) || 0));
    return arr.join('');
};