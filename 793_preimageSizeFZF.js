/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function (k) {
    function cal(last) {
        let ans = 0;
        while (last > 0) {
            ans += last;
            last = Math.trunc(last / 5);
        }
        return ans;
    }

    let i = k;
    let last1 = undefined;
    let last2 = undefined;
    while (true) {
        let c = cal(i);
        console.log(`i=${i}, cal(i) ${c}`);
        if (c == k) return 5;
        i += (k - c);
        if (i == last1) return 0;
        last1 = last2;
        last2 = i;
    }
};

console.log(preimageSizeFZF(5));