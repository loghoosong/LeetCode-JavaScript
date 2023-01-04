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
var postorderTraversal = function (root) {
    let ans = [];
    let stack = [];
    let prev = null;
    while (root || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (!root.right || root.right == prev) {
            ans.push(root.val);
            prev = root;
            root = null;
        } else {
            stack.push(root);
            root = root.right;
        }
    }

    return ans;
};