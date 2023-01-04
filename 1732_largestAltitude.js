/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let ans = 0;
    let altitude = 0;
    gain.map(element => {
        altitude += element;
        ans = Math.max(ans, altitude);
    });
    return ans;
};