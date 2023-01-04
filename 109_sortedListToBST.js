/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null;

    let l = 0;
    let copyHead = head;
    while (copyHead) {
        l++;
        copyHead = copyHead.next;
    }

    copyHead = head;
    function iterator(from, end) {
        if (from > end) return null;

        const mid = (from + end + 1) >> 1;
        let node = new TreeNode();
        node.left = iterator(from, mid - 1);
        node.val = copyHead.val;
        copyHead = copyHead.next;
        node.right = iterator(mid + 1, end);
        return node;
    }

    return iterator(0, l - 1);
};