/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return null;

    function writeNext(root) {
        while (root) {
            root.left.next = root.right;
            if (root.next) root.right.next = root.next.left;
            root = root.next;
        }
    }

    let ans = root;
    while (root.left) {
        writeNext(root);
        root = root.left;
    }
    return ans;
};