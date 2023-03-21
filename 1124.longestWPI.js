/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    let wpi = 0;
    let preSumIsTD = 0;
    const map = new Map();
    hours.map((v, i) => {
        preSumIsTD += v > 8 ? 1 : -1;
        if (preSumIsTD > 0) {
            wpi = Math.max(wpi, i + 1);
        } else {
            if (!map.has(preSumIsTD)) map.set(preSumIsTD, i);
            if (map.has(preSumIsTD - 1)) {
                wpi = Math.max(wpi, i - map.get(preSumIsTD - 1));
            }
        }
    });

    return wpi;
};