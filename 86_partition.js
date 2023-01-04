/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let small = new ListNode();
    let big = new ListNode();
    let copySmall = small;
    let copyBig = big;
    while (head) {
        if (head.val < x) {
            copySmall.next = head;
            copySmall = head;
        } else {
            copyBig.next = head;
            copyBig = head;
        }
        head = head.next;
    }
    copySmall.next = big.next;
    copyBig.next = null;
    return small.next;
};