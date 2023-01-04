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
var countNodes = function (root) {
    if (!root) return 0;
    let maxDepth = -1;
    let count = 0;

    function traversal(node, depth) {
        if (depth > maxDepth) {
            maxDepth = depth;
            count = 0;
        } else if (depth == maxDepth) {
            count++;
        }

        if (node.left) traversal(node.left, depth + 1);
        if (node.right) traversal(node.right, depth + 1);
    }

    traversal(root, 0);
    return (1 << maxDepth) + count;
};