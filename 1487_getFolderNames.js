/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
    const map = new Map();
    for (let i = 0; i < names.length; i++) {
        if (!map.has(names[i])) {
            map.set(names[i], 1);
        } else {
            for (let j = map.get(names[i]); ; j++) {
                if (!map.has(names[i] + `(${j})`)) {
                    map.set(names[i] + `(${j})`, 1);
                    map.set(names[i], j);
                    break;
                }
            }
        }
    }

    return Array.from(map.keys());
};