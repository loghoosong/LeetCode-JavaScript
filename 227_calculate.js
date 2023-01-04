/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let ans = 0;
    let mul = 1;
    let num = 0;
    let signAdd = 1;
    let signMul = true;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case ' ':
                break;
            case '+':
                if (signMul) {
                    ans += signAdd * (mul * num);
                } else {
                    ans += signAdd * Math.trunc(mul / num);
                }
                signAdd = 1;
                signMul = true;
                num = 0;
                mul = 1;
                break;
            case '-':
                if (signMul) {
                    ans += signAdd * (mul * num);
                } else {
                    ans += signAdd * Math.trunc(mul / num);
                }
                signAdd = -1;
                signMul = true;
                num = 0;
                mul = 1;
                break;
            case '*':
                if (signMul) {
                    mul = mul * num;
                } else {
                    mul = Math.trunc(mul / num);
                }
                signMul = true;
                num = 0;
                break;
            case '/':
                if (signMul) {
                    mul = mul * num;
                } else {
                    mul = Math.trunc(mul / num);
                }
                signMul = false;
                num = 0;
                break;
            default:
                num = num * 10 + +s[i];
        }
    }
    if (signMul) {
        ans += signAdd * (mul * num);
    } else {
        ans += signAdd * Math.trunc(mul / num);
    }
    return ans;
};

console.log(calculate("4/3+2"));