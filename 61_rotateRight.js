/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) return head;

    let tail = head;
    let len = 1;
    while (tail.next) {
        tail = tail.next;
        len++;
    }

    k %= len;
    if (k == 0) return head;
    k = len - k;
    tail.next = head;

    let idx = 1;
    while (idx < k) {
        head = head.next;
        idx++;
    }
    let ans = head.next;
    head.next = null;

    return ans;
};