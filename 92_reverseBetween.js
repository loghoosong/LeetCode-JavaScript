/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let ret = new ListNode();
    ret.next = head;
    head = ret;
    let arr = [];
    let count = 0;
    let pre, after;
    while (true) {
        if (count == left - 1) pre = head;
        if (count == right + 1) {
            after = head;
            break;
        }
        if (count >= left) arr.push(head);
        count++;
        head = head.next;
    }

    const len = right - left + 1;
    pre.next = arr[len - 1];
    for (let i = len - 1; i > 0; i--) {
        arr[i].next = arr[i - 1];
    }
    arr[0].next = after;

    return ret.next;
};