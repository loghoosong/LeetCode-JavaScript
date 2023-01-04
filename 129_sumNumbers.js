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
var sumNumbers = function (root) {
    let ans = 0;
    function traversal(root, num) {
        num = num * 10 + root.val;
        if (!root.left && !root.right) {
            ans += num;
            return;
        }
        if (root.left) traversal(root.left, num);
        if (root.right) traversal(root.right, num);
    }

    traversal(root, 0);
    return ans;
};