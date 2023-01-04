/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = new Map();
    for (let char of t) {
        const count = map.get(char) || 0;
        map.set(char, count + 1);
    }

    const sLen = s.length;
    const tLen = t.length;
    let zeroCount = 0;
    let start = -1;
    for (let i = 0; i < sLen; i++) {
        if (map.has(s[i])) {
            const count = map.get(s[i]);
            if (count == 1) zeroCount++;
            map.set(s[i], count - 1);
            start = i;
            break;
        }
    }
    if (start == -1) {
        return '';
    } else if (tLen == 1) {
        return t;
    }

    let end = -1;
    for (let i = start + 1; i < sLen; i++) {
        if (map.has(s[i])) {
            const count = map.get(s[i]);
            if (count == 1) zeroCount++;
            map.set(s[i], count - 1);
        }
        if (zeroCount == map.size) {
            end = i;
            break;
        }
    }
    if (end == -1) return '';

    let ans = s.slice(start, end + 1);
    let left = start, right = end;
    outer: while (true) {
        for (; start <= end; start++) {
            if (map.has(s[start])) {
                const count = map.get(s[start]);
                map.set(s[start], count + 1);
                if (count == 0) {
                    if (right - left > end - start) {
                        left = start;
                        right = end;
                    }
                    start++;
                    break;
                }
            }
        }

        for (end++; end < sLen; end++) {
            if (map.has(s[end])) {
                const count = map.get(s[end]);
                map.set(s[end], count - 1);
                if (count == 1) {
                    if (right - left > end - start) {
                        left = start;
                        right = end;
                    }
                    continue outer;
                }
            }
        }
        return s.slice(left, right + 1);
    }
};