/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function reverse(arr, start, end) {
        while (start < end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    let arr = Array.from(s);
    const len = s.length;
    for (let ptr = 0; ptr < len; ptr += 2 * k) {
        if (ptr + k < len) {
            reverse(arr, ptr, ptr + k - 1);
        } else {
            reverse(arr, ptr, len - 1);
        }
    }
    return arr.join('');
};