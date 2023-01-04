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
var preorderTraversal = function (root) {
    let ans = [];
    let stack = [];
    while (root || stack.length > 0) {
        while (root) {
            ans.push(root.val);
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        root = root.right;
    }

    return ans;
};