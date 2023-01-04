/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    function generate(from, end) {
        if (from > end) return [];
        if (from == end) return [new TreeNode(from)];

        let allTrees = [];

        let left = generate(from, end - 1);
        for (const l of left) {
            let root = new TreeNode(end);
            root.left = l;
            allTrees.push(root);
        }

        let right = generate(from + 1, end);
        for (const r of right) {
            let root = new TreeNode(from);
            root.right = r;
            allTrees.push(root);
        }

        for (let i = from + 1; i < end; i++) {
            let left = generate(from, i - 1);
            let right = generate(i + 1, end);
            for (const l of left) {
                for (const r of right) {
                    let root = new TreeNode(i);
                    root.left = l;
                    root.right = r;
                    allTrees.push(root);
                }
            }
        }
        return allTrees;
    }

    return generate(1, n)
};