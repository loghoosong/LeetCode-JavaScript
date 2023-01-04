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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;

    let ans = true;
    function iterator(root, depth) {
        if (!ans) return;

        let l = depth, r = depth;
        if (root.left) l = iterator(root.left, depth + 1);
        if (root.right) r = iterator(root.right, depth + 1);

        if (Math.abs(l - r) > 1) ans = false;

        return Math.max(l, r);
    }

    iterator(root, 0);
    return ans;
};