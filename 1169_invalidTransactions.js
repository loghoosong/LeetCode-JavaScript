/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
    const invalid = new Set;

    const map = new Map();
    transactions.map((str, idx) => {
        const [name, time, amount, city] = str.split(',');
        if (+amount > 1000) invalid.add(idx);
        if (map.has(name)) {
            map.get(name).push([time, city, idx]);
        } else {
            map.set(name, [[time, city, idx]]);
        }
    });

    for (let arr of map.values()) {
        arr.sort((a, b) => a[0] - b[0]);
        let left = 0, right = 1;
        while (right < arr.length) {
            if (left === right) {
                right++;
            } else if (arr[right][0] - arr[left][0] <= 60) {
                for (let i = left; i < right; i++) {
                    if (arr[i][1] !== arr[right][1]) {
                        invalid.add(arr[i][2]);
                        invalid.add(arr[right][2]);
                    }
                }
                right++;
            } else {
                left++;
            }
        }
    }

    return transactions.filter((_, i) => invalid.has(i));
};