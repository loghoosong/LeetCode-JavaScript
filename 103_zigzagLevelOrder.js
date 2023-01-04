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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let ans = [];
    function order(nodeList, falg = true) {
        let valList = [];
        if (falg) {
            for (let i = 0; i < nodeList.length; i++) {
                valList.push(nodeList[i].val);
            }
        } else {
            for (let i = nodeList.length - 1; i >= 0; i--) {
                valList.push(nodeList[i].val);
            }
        }

        let nextLevelNode = [];
        for (node of nodeList) {
            if (node.left) nextLevelNode.push(node.left);
            if (node.right) nextLevelNode.push(node.right);
        }
        ans.push(valList);
        if (nextLevelNode.length > 0) order(nextLevelNode, !falg);
    }

    if (!root) return [];
    order([root]);
    return ans;
};