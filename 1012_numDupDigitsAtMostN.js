/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function (n) {
    const A = (m, n) => {
        let ans = 1;
        for (let i = 0; i < m; i++) {
            ans *= n--;
        }
        return ans;
    }

    const countBits = num => {
        let ans = 0;
        while (num > 0) {
            if ((num & 1) === 1) ans++;
            num >>= 1;
        }
        return ans;
    }

    const f = (mask, digits, idx, isLimited) => {
        if (idx === digits.length) return 1;

        let ans = 0;
        const t = isLimited ? +digits[idx] : 9;
        for (let d = 0; d <= t; d++) {
            if ((mask & (1 << d)) > 0) continue;

            if (isLimited && d === t) {
                ans += f(mask | (1 << d), digits, idx + 1, true);
            } else if (mask === 0 && d === 0) {
                ans += f(mask, digits, idx + 1, false);
            } else {
                ans += A(digits.length - 1 - idx, 9 - countBits(mask));
            }
        }
        return ans;
    }

    const digits = n.toString();
    return n + 1 - f(0, digits, 0, true);
};