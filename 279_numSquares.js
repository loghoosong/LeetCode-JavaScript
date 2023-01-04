/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let counter = 0;
    let ans = n;

    function doMinus(maxSquare) {
        for (let i = maxSquare; i > 0; i--) {
            if (n >= i * i) {
                n -= i * i;
                counter++;
                if (n == 0) {
                    if (ans == 1 || ans == 2) return counter;
                    ans = counter;
                } else {
                    if (counter < ans) {
                        doMinus(i);
                    } else {
                        n += i * i;
                        counter--;
                        break;
                    }
                }
                n += i * i;
                counter--;
            }
        }
    }

    doMinus(Math.trunc(Math.sqrt(n)));
    return ans;
};