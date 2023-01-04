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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    if (!root) return [];

    let ans = [];
    function itreator(root, sum, arr) {
        sum += root.val;
        arr.push(root.val);
        if (!root.left && !root.right) {
            if (sum == targetSum) {
                ans.push([].concat(arr));
            }
        } else {
            if (root.left) itreator(root.left, sum, arr);
            if (root.right) itreator(root.right, sum, arr);
        }
        arr.pop();
    }

    itreator(root, 0, [])
    return ans;
};