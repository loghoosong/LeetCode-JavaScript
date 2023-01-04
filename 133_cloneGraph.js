/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;

    let ret = new Node(node.val);
    let done = new Map();
    done.set(ret.val, ret);

    function traversal(node, copy) {
        for (let n of node.neighbors) {
            if (done.has(n.val)) {
                copy.neighbors.push(done.get(n.val));
            } else {
                let newNode = new Node(n.val);
                copy.neighbors.push(newNode);
                done.set(newNode.val, newNode);
                traversal(n, newNode);
            }
        }
    }

    traversal(node, ret);
    return ret;
};