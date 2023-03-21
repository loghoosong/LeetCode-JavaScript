/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
    let diffCnt = 0;
    const diffCntToIndex = new Map([[0, 0]]);    //初始化个0
    const max = { length: 0, end: 0 };
    const letterRegex = /[A-Za-z]/;
    array.map((item, i) => {
        diffCnt += item.match(letterRegex) ? 1 : -1;

        if (!diffCntToIndex.has(diffCnt)) {
            diffCntToIndex.set(diffCnt, i + 1);
        } else {
            const len = i - diffCntToIndex.get(diffCnt) + 1;
            if (len > max.length) {
                max.length = len;
                max.end = i + 1;
            }
        }
    });

    return array.slice(max.end - max.length, max.end);
};