/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast) {
        slow = slow.next;
        fast = fast.next;
        if (!fast) return null;
        fast = fast.next;
        if (fast && fast == slow) {
            let p = head;
            while (p != slow) {
                p = p.next;
                slow = slow.next;
            }
            return p;
        }
    }

    return null;
};