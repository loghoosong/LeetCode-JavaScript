/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
    const ERR = 0.00001;
    function twoNumCal(n1, n2, op) {
        switch (op) {
            case 1:
                return n1 + n2;
            case 2:
                return Math.abs(n1 - n2);
            case 3:
                return n1 * n2;
            case 4:
                return n1 / n2;
            case 5:
                return n2 / n1;
        }
    }

    function iteator(target, nums) {
        const len = nums.length;
        if (len == 1) return Math.abs(nums[0] - target) < ERR;

        for (let i = 0; i < len; i++) {
            const n = nums.shift();
            for (let i = 1; i <= 5; i++) {
                if (iteator(twoNumCal(target, n, i), nums)) return true;
            }
            nums.push(n);
        }
        return false;
    }

    function twoNumMul(target, left1, left2, right1, right2) {
        for (let i = 1; i <= 2; i++) {
            for (let j = 1; j <= 2; j++) {
                if (twoNumCal(left1, left2, i) * twoNumCal(right1, right2, j) == target) return true;
            }
        }
        return false;
    }

    if (twoNumMul(24, cards[1], cards[2], cards[3], cards[0])) return true;
    if (twoNumMul(24, cards[1], cards[3], cards[2], cards[0])) return true;
    if (twoNumMul(24, cards[1], cards[0], cards[2], cards[3])) return true;

    return iteator(24, cards);
};

console.log(judgePoint24([1, 9, 1, 2]));