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
var isValidBST = function (root) {
    let num = -Infinity;
    let ans = true;
    function judge(root) {
        if (ans && root.left) judge(root.left);
        if (ans) {
            if (root.val <= num) {
                ans = false;
                return;
            } else {
                num = root.val;
            }
        }
        if (ans && root.right) judge(root.right);
    }

    judge(root);
    return ans;
};