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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let count = 0;
    let ans = null;
    function traversal(node) {
        if (node.left && ans === null) traversal(node.left);
        count++;
        if (count === k) ans = node.val;
        if (node.right && ans === null) traversal(node.right);
    }

    traversal(root);
    return ans;
};