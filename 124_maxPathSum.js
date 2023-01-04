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
 * @return {number}
 */
var maxPathSum = function (root) {
    let ans = -10000;
    function iterator(root) {
        const l = root.left ? iterator(root.left) : 0;
        const r = root.right ? iterator(root.right) : 0;
        const ret = Math.max(root.val, root.val + r, root.val + l);
        ans = Math.max(ans, ret, root.val + r + l);
        return ret;
    }

    iterator(root);
    return ans;
};