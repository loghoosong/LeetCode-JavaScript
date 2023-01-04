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
 */
var BSTIterator = function (root) {
    this.iterator = [];
    let node = root;
    while (node) {
        this.iterator.push(node);
        node = node.left;
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    const root = this.iterator.pop();
    let node = root.right;
    while (node) {
        this.iterator.push(node);
        node = node.left;
    }
    return root.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.iterator.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */