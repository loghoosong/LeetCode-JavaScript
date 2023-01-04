/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let ans = 0;
    for (let box of boxTypes) {
        ans += (Math.min(box[0], truckSize) * box[1]);
        truckSize -= box[0];
        if (truckSize <= 0) break;
    }
    return ans;
};