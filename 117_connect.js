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
    if (!root) return root;

    function writeNext(root) {
        let firstChild, pre;
        while (root) {
            if (root.left) {
                if (!firstChild) {
                    firstChild = root.left;
                    pre = root.left;
                } else {
                    pre.next = root.left;
                    pre = pre.next;
                }
            }
            if (root.right) {
                if (!firstChild) {
                    firstChild = root.right;
                    pre = root.right;
                } else {
                    pre.next = root.right;
                    pre = pre.next;
                }
            }
            root = root.next;
        }
        return firstChild;
    }

    let copy = root;
    while (copy) {
        copy = writeNext(copy);
    }
    return root;
};