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
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function (root, n, x) {
    const btreeFind = (root, tar) => {
        if (!root) return null;
        if (root.val === tar) return root;
        return btreeFind(root.left, tar) || btreeFind(root.right, tar);
    }
    const xNode = btreeFind(root, x);

    const getChildCnt = root => {
        if (!root) return 0;
        return getChildCnt(root.left) + getChildCnt(root.right) + 1;
    };
    const leftChildCnt = getChildCnt(xNode.left);
    const rightChildCnt = getChildCnt(xNode.right);
    const otherNodeCnt = n - 1 - leftChildCnt - rightChildCnt;

    return Math.max(leftChildCnt, rightChildCnt, otherNodeCnt) > (n >> 1);
};