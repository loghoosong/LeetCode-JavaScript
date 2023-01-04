/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return;

    function rightChild(root) {
        let copy = root;
        while (copy.right) {
            copy = copy.right;
        }
        return copy;
    }

    copy = root;
    while (copy.left || copy.right) {
        if (copy.left && copy.right) {
            let r = rightChild(copy.left);
            r.right = copy.right;
            copy.right = copy.left;
            copy.left = null;
        } else if (copy.left) {
            copy.right = copy.left;
            copy.left = null;
        }
        copy = copy.right;
    }
};