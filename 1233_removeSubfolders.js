/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    folder.sort();

    const contain = (longStr, shortStr) => {
        if (longStr.length < shortStr.length) return false;
        for (let i = 0; i < shortStr.length; i++) {
            if (longStr[i] !== shortStr[i]) return false;
        }
        return true;
    }

    const ans = [folder[0]];
    for (let left = 0, right = 1; right < folder.length; right++) {
        if (contain(folder[right], folder[left])
            && folder[right][folder[left].length] === '/') {
            continue;
        }
        left = right;
        ans.push(folder[right]);
    }
    return ans;
};