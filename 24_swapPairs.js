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
var swapPairs = function (head) {
    let ret = new ListNode();
    ret.next = head;
    let last = ret;
    while (head) {
        let first = head;
        let second = first.next;
        if (second) {
            head = second.next;
            first.next = head;
            second.next = first;
            last.next = second;
            last = first;
        } else {
            break;
        }
    }

    return ret.next;
};