/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let ret = new ListNode();
    ret.next = head;

    let prev = ret;
    while (head) {
        if (head.val == val) {
            head = head.next;
            prev.next = head;
        } else {
            prev = head;
            head = head.next;
        }
    }

    return ret.next;
};