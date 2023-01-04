/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let root = new TreeNode();
    function iterator(node, from, end) {
        const mid = (from + end) >> 1;
        node.val = nums[mid];
        if (mid > from) {
            node.left = new TreeNode();
            iterator(node.left, from, mid - 1);
        }
        if (mid < end) {
            node.right = new TreeNode();
            iterator(node.right, mid + 1, end);
        }
    }

    iterator(root, 0, nums.length - 1);
    return root;
};