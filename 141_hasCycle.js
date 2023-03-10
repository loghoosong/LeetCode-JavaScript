/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast && slow) {
        slow = slow.next;
        fast = fast.next;
        if (!fast) return false;
        fast = fast.next;
        if (fast == slow) return true;
    }

    return false;
};