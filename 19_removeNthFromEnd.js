/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const ret = head;
    let arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }

    const len = arr.length;
    if (n == len) return ret.next;
    if (n == 1) {
        arr[len - 2].next = null;
    } else {
        arr[len - n - 1].next = arr[len - n + 1];
    }
    return ret;
};