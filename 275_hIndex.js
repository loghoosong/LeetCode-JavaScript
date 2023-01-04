/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    if (citations[0] >= citations.length) return citations.length;

    const len = citations.length;
    let left = 0, right = len - 1;
    while (left <= right) {
        const mid = left + right >> 1;
        if (citations[mid] >= len - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return len - left;
};