/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    const len = nums.length;
    if (len < 3) return true;

    function iteator(startIndex, endIndex, selfPoint, opponentPoint) {
        if (endIndex - startIndex == 1) {
            if (nums[startIndex] + selfPoint >= nums[endIndex] + opponentPoint) {
                return true;
            } else if (nums[endIndex] + selfPoint > nums[startIndex] + opponentPoint) {
                return true;
            } else {
                return false;
            }
        }

        const a = iteator(startIndex + 1, endIndex, opponentPoint, selfPoint + nums[startIndex]);
        if (!a) return true;
        const b = iteator(startIndex, endIndex - 1, opponentPoint, selfPoint + nums[endIndex]);
        if (!b) return true;
        return false;
    }

    return iteator(0, len - 1, 0, 0);
};

console.log(PredictTheWinner([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));