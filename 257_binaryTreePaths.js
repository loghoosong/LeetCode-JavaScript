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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    Array.prototype.print = function () {
        if (this.length == 0) return '';
        let ret = '' + this[0];
        for (let i = 1; i < this.length; i++) {
            ret += '->' + this[i];
        }
        return ret;
    }

    function traversal(root, arr) {
        arr.push(root.val);
        if (root.left === null && root.right === null) {
            ans.push(arr.print());
        } else {
            if (root.left !== null) traversal(root.left, arr);
            if (root.right !== null) traversal(root.right, arr);
        }
        arr.pop();
    }

    let ans = [];
    traversal(root, []);
    return ans;
};