/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
    function containOnly018(num) {
        const digits = [0, 1, 8];
        const len = digits.length;
        const d = Math.trunc(Math.log10(num));

        let counter = 0;
        let stop = false;
        function permutation(times, start) {
            if (times == -1) {
                if (start <= num) {
                    counter++;
                } else {
                    stop = true;
                }
                return;
            }
            const mul = Math.pow(10, times);
            for (let i = 0; i < len; i++) {
                permutation(times - 1, start + digits[i] * mul);
                if (stop) return;
            }
        }

        permutation(d, 0);
        return counter - 1;
    }

    function contain347(num) {
        switch (num) {
            case 10000:
                return 7599;
            case 1000:
                return 657;
            case 100:
                return 51;
            case 10:
                return 3;
            default:
                if (num < 10) {
                    if (num >= 7) return 3;
                    if (num >= 4) return 2;
                    if (num >= 3) return 1;
                    return 0;
                }
        }

        const mul = Math.pow(10, Math.trunc(Math.log10(num)));
        const first = Math.trunc(num / mul);
        if (first >= 8) {
            return (first - 3) * contain347(mul) + 3 * mul + contain347(num - mul * first);
        } else if (first == 7) {
            return 5 * contain347(mul) + 2 * mul + (num - mul * first + 1);
        } else if (first >= 5) {
            return (first - 2) * contain347(mul) + 2 * mul + contain347(num - mul * first);
        } else if (first == 4) {
            return 3 * contain347(mul) + mul + (num - mul * first + 1);
        } else if (first == 3) {
            return 3 * contain347(mul) + (num - mul * first + 1);
        } else {
            return first * contain347(mul) + contain347(num - mul * first);
        }
    }

    return n - contain347(n) - containOnly018(n);
};