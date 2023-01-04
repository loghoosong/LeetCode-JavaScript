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
var levelOrder = function (root) {
    let ans = [];
    function order(nodeList) {
        let nextLevelNode = [];
        let valList = [];
        for (node of nodeList) {
            valList.push(node.val);
            if (node.left) nextLevelNode.push(node.left);
            if (node.right) nextLevelNode.push(node.right);
        }
        ans.push(valList);
        if (nextLevelNode.length > 0) order(nextLevelNode);
    }

    if (!root) return [];
    order([root]);
    return ans;
};