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
var minDepth = function (root) {
    if (!root) return 0;

    let ans = 1;
    let roots = [root];
    while (true) {
        let childs = [];
        for (let r of roots) {
            if (!r.left & !r.right) {
                return ans;
            }
            if (r.left) childs.push(r.left);
            if (r.right) childs.push(r.right);
        }
        roots = childs;
        ans++;
    }
};