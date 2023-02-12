/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
    const getPos = char => {
        return pt = char.codePointAt() - 97;
    }

    const calPath = (curPos, tarPos) => {
        if (curPos === tarPos) return '!';

        let path = '';
        const r = Math.trunc(tarPos / 5) - Math.trunc(curPos / 5);
        const c = tarPos % 5 - curPos % 5;
        if (curPos > tarPos) {
            path += r > 0 ? 'D'.repeat(r) : 'U'.repeat(-r);
            path += c > 0 ? 'R'.repeat(c) : 'L'.repeat(-c);
        } else {
            path += c > 0 ? 'R'.repeat(c) : 'L'.repeat(-c);
            path += r > 0 ? 'D'.repeat(r) : 'U'.repeat(-r);
        }

        return path + '!';
    }

    let ans = '';
    let curPos = 0, tarPos;
    for (let char of target) {
        tarPos = getPos(char);
        ans += calPath(curPos, tarPos);
        curPos = tarPos;
    }
    return ans;
};