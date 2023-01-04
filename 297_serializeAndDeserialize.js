/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root === null) return '';
    let ans = [];
    let stack = [root];
    while (stack.length > 0) {
        let temp = [];
        stack.map(r => {
            if (r !== null) {
                ans.push(r.val);
                temp.push(r.left);
                temp.push(r.right);
            } else {
                ans.push('null');
            }
        });
        stack = temp;
    }

    while (ans[ans.length - 1] === 'null') {
        ans.pop();
    }
    return '[' + ans.join() + ']';
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data[0] !== '[' || data[data.length - 1] !== ']') return null;
    data = data.slice(1, data.length - 1);
    if (data === '') return null;

    let arr = data.split(',');
    let head = new TreeNode(arr[0]);
    let idx = 1;
    let stack = [head];
    outer: while (idx < arr.length) {
        let temp = [];
        for (let r of stack) {
            if (arr[idx] !== 'null') {
                r.left = new TreeNode(arr[idx]);
                temp.push(r.left);
            }
            idx++;
            if (idx === arr.length) break outer;

            if (arr[idx] !== 'null') {
                r.right = new TreeNode(arr[idx]);
                temp.push(r.right);
            }
            idx++;
            if (idx === arr.length) break outer;
        }
        stack = temp;
    }

    return head;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */