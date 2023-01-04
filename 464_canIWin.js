/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
    const sum = maxChoosableInteger * (maxChoosableInteger + 1) >> 1;
    if (desiredTotal > sum) return false;
    if (desiredTotal == sum) return Boolean(maxChoosableInteger & 1);
    if (maxChoosableInteger >= desiredTotal) return true;

    let map = new Map();
    function iteator(picked, target) {
        if (map.has(picked)) return map.get(picked);

        for (let i = 1; i <= maxChoosableInteger; i++) {
            if (1 << (i - 1) & picked) continue;

            if (i >= target) {
                map.set(picked, true);
                return true;
            }

            if (!iteator((1 << (i - 1) | picked), target - i)) {
                map.set(picked, true)
                return true;
            }
        }

        map.set(picked, false);
        return false;
    }

    return iteator(0, desiredTotal);
};