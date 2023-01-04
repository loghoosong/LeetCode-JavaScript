/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
    if (n == 1) return 9;

    const uBound = Math.pow(10, n);
    const lBound = Math.pow(10, n - 1);
    let lastSqrt = BigInt(uBound) - 1n;
    function constructRectangle(area) {
        let sqrt = lastSqrt;
        while (true) {
            sqrt = (area / sqrt + sqrt) / 2n;
            if (sqrt * sqrt <= area && (sqrt + 1n) * (sqrt + 1n) > area) {
                lastSqrt = sqrt;
                break;
            }
        }

        let low = area / BigInt(uBound);
        for (; sqrt >= 1n; sqrt--) {
            if (sqrt <= low) return false;
            if (area % sqrt == 0n) return true;
        }
        return false;
    };

    function createPalindrome(num, n) {
        let right = 0;
        let left = num;
        while (left > 0) {
            right = right * 10 + left % 10;;
            left = Math.trunc(left / 10);
        }
        return BigInt(num) * BigInt(Math.pow(10, n)) + BigInt(right);
    }

    for (let left = uBound - 1; left >= lBound; left--) {
        const palindrome = createPalindrome(left, n);
        if (constructRectangle(palindrome)) return Number(palindrome % 1337n);
    }
};

for (let i = 1; i <= 8; i++) {
    console.log(largestPalindrome(i));
}