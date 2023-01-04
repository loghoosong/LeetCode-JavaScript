/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num == 0 || num == 1 || num == 4 || num == 9) return true;

    function judge(n) {
        if (n * n == num) return 1;
        if (n * n > num && (n - 1) * (n - 1) < num) return -1;
        if (n * n < num && (n + 1) * (n + 1) > num) return -1;
        return 0;
    }

    let it = 1;
    let last = num;
    while (true) {
        it = Math.trunc((num / it + it) / 2);
        if ((last - it) < 1) {
            let j = judge(it);
            if (j == 1) {
                return true;
            } else if (j == -1) {
                return false;
            }
        } else {
            last = it;
        }
    }
};