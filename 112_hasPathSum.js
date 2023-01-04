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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    let ans = false;
    function iterator(root, sum) {
        if (ans) return;
        sum += root.val;
        if (root.left) iterator(root.left, sum);
        if (root.right) iterator(root.right, sum);
        if (!root.left && !root.right) {
            if (sum == targetSum) ans = true;
        }
    }

    iterator(root, 0);
    return ans;
};