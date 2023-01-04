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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];
    let ans = [];
    function iterator(node, n) {
        if (ans.length == n) {
            ans.push([node.val]);
        } else {
            ans[n].push(node.val);
        }
        if (node.left) iterator(node.left, n + 1);
        if (node.right) iterator(node.right, n + 1);
    }

    iterator(root, 0);
    return ans.reverse();
};