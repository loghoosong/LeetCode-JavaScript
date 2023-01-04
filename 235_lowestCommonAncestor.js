/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function find(root, target) {
        let ans = [];
        let node = root;
        while (true) {
            ans.push(node);
            if (target.val < node.val) {
                node = node.left;
            } else if (target.val > node.val) {
                node = node.right;
            } else {
                return ans;
            }
        }
    }

    let pArr = find(root, p);
    let qArr = find(root, q);
    let i = 0;
    for (; i < Math.min(pArr.length, qArr.length); i++) {
        if (pArr[i].val != qArr[i].val) break;
    }
    return pArr[i - 1];
};