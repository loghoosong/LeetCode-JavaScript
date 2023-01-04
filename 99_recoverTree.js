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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let num = -Infinity;
    let node = null;
    let errorNode1, errorNode2;
    function inorderTraversal(root) {
        if (root.left) inorderTraversal(root.left);
        if (root.val <= num) {
            if (!errorNode1) {
                errorNode1 = node;
                errorNode2 = root;
            } else {
                errorNode2 = root;
            }
        }
        num = root.val;
        node = root;
        if (root.right) inorderTraversal(root.right);
    }

    inorderTraversal(root);

    const temp = errorNode1.val;
    errorNode1.val = errorNode2.val;
    errorNode2.val = temp;
};