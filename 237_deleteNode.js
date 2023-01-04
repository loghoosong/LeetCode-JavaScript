/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
    let prev;
    while (node.next) {
        prev = node;
        node = node.next;
        const temp = node.val;
        node.val = prev.val;
        prev.val = temp;
    }
    prev.next = null;
};