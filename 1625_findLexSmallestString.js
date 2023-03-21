/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
    const len = s.length;

    const gcd = (n1, n2) => {
        while (n2 !== 0) {
            const temp = n1;
            n1 = n2;
            n2 = temp % n2;
        }
        return n1;
    }

    const findSmallestAdded = (t, start, step = 1) => {
        let min = 10, times = 0;
        for (let i = 0; i < 10; i += step) {
            const added = (+t[start] + i * a) % 10;
            if (added < min) {
                min = added;
                times = i;
            }
        }

        for (let i = start; i < len; i += 2) {
            t[i] = ((+t[i] + times * a) % 10).toString();
        }
    }

    let ans = s;
    s += s;
    const arr = s.split('');

    const ga = gcd(a, 10), gb = gcd(b, len);
    for (let i = 0; i < len; i += gb) {
        t = arr.slice(i, i + len);
        findSmallestAdded(t, 1, ga);
        if ((b & 1) !== 0) {
            findSmallestAdded(t, 0, ga);
        }

        const tStr = t.join('');
        if (tStr < ans) {
            ans = tStr;
        }
    }

    return ans;
};