/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
    if (jug1Capacity + jug2Capacity < targetCapacity) return false;

    let max = 1;
    if (jug1Capacity == jug2Capacity) {
        max = jug1Capacity;
    } else {
        for (let i = 1; i <= Math.abs(jug1Capacity - jug2Capacity); i++) {
            if (jug1Capacity % i == 0 && jug2Capacity % i == 0) {
                if (i > max) max = i;
            }
        }
    }
    return targetCapacity % max == 0;
};