/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    const l = gas.length;
    let i = 0;
    while (i < l) {
        let count = 0, d = 0;
        while (count < l) {
            const j = (count + i) % l;
            d += gas[j] - cost[j];
            if (d < 0) break;
            count++;
        }
        if (count == l) return i;
        i += count + 1;
    }

    return -1;
};