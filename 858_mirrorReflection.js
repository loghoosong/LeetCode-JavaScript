/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
    let xCount = 0;
    let yCount = 1;
    while (true) {
        if ((yCount * p) % q == 0) {
            xCount = yCount * p / q;
            console.log('xCount=' + xCount)
            if ((xCount & 1) == 0) {
                return 2;
            } else {
                if ((yCount & 1) == 1) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
        yCount++;
    }
};