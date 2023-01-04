/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head) return head;

    let odd = true;
    let ptr = head;
    let oddTail = head;
    let evenHead = new ListNode();
    let evenTail = evenHead;
    while (ptr.next) {
        ptr = ptr.next;
        odd = !odd;
        if (odd) {
            oddTail.next = ptr;
            oddTail = ptr;
        } else {
            evenTail.next = ptr;
            evenTail = ptr;
        }
    }

    evenTail.next = null;
    oddTail.next = evenHead.next;
    return head;
};