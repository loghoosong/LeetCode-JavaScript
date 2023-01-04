/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    function build(fromPost, endPost, fromIn, endIn) {
        let root = new TreeNode(postorder[fromPost]);
        if (fromPost == endPost) return root;

        const rootIdxIn = inorder.indexOf(postorder[fromPost], fromIn);
        if (rootIdxIn == fromIn) {
            root.right = build(fromPost - 1, endPost, fromIn + 1, endIn);
        } else if (rootIdxIn == endIn) {
            root.left = build(fromPost - 1, endPost, fromIn, endIn - 1);
        } else {
            for (let i = fromPost - 1; i >= endPost; i--) {
                if (inorder.indexOf(postorder[i]) < rootIdxIn) {
                    root.left = build(i, endPost, fromIn, rootIdxIn - 1);
                    root.right = build(fromPost - 1, i + 1, rootIdxIn + 1, endIn);
                    break;
                }
            }
        }

        return root;
    }

    return build(postorder.length - 1, 0, 0, inorder.length - 1);

};