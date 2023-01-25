/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
    const map = new Map();
    knowledge.map(v => map.set(v[0], v[1]));

    const regex = /\(([a-z]+?)\)/g;
    return s.replace(regex, (_, p1) => map.get(p1) || '?');
};