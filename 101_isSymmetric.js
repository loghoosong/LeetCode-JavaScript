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
var isSymmetric = function (root) {
    if (!root.left) {
        if (root.right) return false;
        return true;
    }
    if (!root.right) return false;

    function judge(lRoot, rRoot) {
        if (lRoot.val != rRoot.val) return false;

        if (!lRoot.left && rRoot.right) return false;
        if (lRoot.left) {
            if (!rRoot.right) return false;
            if (!judge(lRoot.left, rRoot.right)) return false;
        }

        if (!lRoot.right && rRoot.left) return false;
        if (lRoot.right) {
            if (!rRoot.left) return false;
            if (!judge(lRoot.right, rRoot.left)) return false;
        }

        return true;
    }

    return judge(root.left, root.right);
};