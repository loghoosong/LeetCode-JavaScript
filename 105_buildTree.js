/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    function build(fromPre, endPre, fromIn, endIn) {
        let root = new TreeNode(preorder[fromPre]);
        if (fromPre == endPre) return root;

        const rootIdxIn = inorder.indexOf(preorder[fromPre], fromIn);
        if (rootIdxIn == fromIn) {
            root.right = build(fromPre + 1, endPre, fromIn + 1, endIn);
        } else if (rootIdxIn == endIn) {
            root.left = build(fromPre + 1, endPre, fromIn, endIn - 1);
        } else {
            for (let i = fromPre + 1; i <= endPre; i++) {
                if (inorder.indexOf(preorder[i]) > rootIdxIn) {
                    root.left = build(fromPre + 1, i - 1, fromIn, rootIdxIn - 1);
                    root.right = build(i, endPre, rootIdxIn + 1, endIn);
                    break;
                }
            }
        }

        return root;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};