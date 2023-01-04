/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
    target = Math.abs(target);

    let n = Math.trunc(Math.sqrt(target) / 4);
    let ans;
    if (target & 1) {
        while (true) {
            ans = 4 * n + 1;
            if ((ans * (ans + 1) >> 1) >= target) return ans;
            ans = 4 * n + 2;
            if ((ans * (ans + 1) >> 1) >= target) return ans;
            n++;
        }
    } else {
        while (true) {
            ans = 4 * n + 3;
            if ((ans * (ans + 1) >> 1) >= target) return ans;
            ans = 4 * n + 4;
            if ((ans * (ans + 1) >> 1) >= target) return ans;
            n++;
        }
    }
};