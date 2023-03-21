/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    const suitSet = new Set(suits);
    if (suitSet.size === 1) return 'Flush';

    const rankMap = new Map();
    ranks.map(r => {
        const cnt = rankMap.get(r) || 0;
        rankMap.set(r, cnt + 1);
    });

    if (rankMap.size === 5) return 'High Card';

    for (let v of rankMap.values()) {
        if (v > 2) return 'Three of a Kind';
    }

    return 'Pair';
};