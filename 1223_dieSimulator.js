/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function (n, rollMax) {
    class Die {
        constructor(max) {
            this.arr = [1]; //arr[i]表示末尾连续出现（i+1）个某数字的可能为arr[i]个
            this.max = max; //连续数字最多不超过max，也就是arr的长度不能多于limit
            this.sum = 1; //arr的和
        }
    }

    const MOD = 1000000007;
    const dp = rollMax.map(max => new Die(max));
    let ans = 6;
    //第一次投掷的情况就直接初始化了
    for (let i = 1; i < n; i++) {
        dp.map(die => {
            die.arr.unshift((ans - die.sum + MOD) % MOD);
            die.sum = ans; //die.sum -= (ans - die.sum)
            if (die.arr.length > die.max) {
                die.sum = (ans - die.arr.pop() + MOD) % MOD;
            }
        });
        ans = (dp.reduce((s, die) => s + die.sum, 0)) % MOD;
    }

    return ans;
};