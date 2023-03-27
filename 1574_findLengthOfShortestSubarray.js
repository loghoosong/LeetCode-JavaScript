/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
    const len = arr.length;
    let lenFront = lenBack = lenAround = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) break;
        lenFront++;
    }
    if (lenFront === len) return 0;

    for (let i = len - 1; i > 0; i--) {
        if (arr[i] < arr[i - 1]) break;
        lenBack++;
    }
    if (arr[0] > arr[len - 1]) return len - Math.max(lenFront, lenBack);

    let left = 0, right = len - lenBack;
    while (left < lenFront && right < len) {
        if (arr[left] <= arr[right]) {
            lenAround = Math.max(lenAround, 1 + left + len - right);
            left++;
        } else {
            right++;
        }
    }
    return len - Math.max(lenFront, lenBack, lenAround);
};