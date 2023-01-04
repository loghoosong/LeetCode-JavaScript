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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let ans = [];
    if (!root) return ans;

    function traversal(root, depth) {
        if (depth == ans.length) ans.push(root.val);
        if (root.right) traversal(root.right, depth + 1);
        if (root.left) traversal(root.left, depth + 1);
    }

    traversal(root, 0);
    return ans;
};