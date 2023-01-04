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
var reverseList = function (head) {
    if (!head) return head;

    let prev = new ListNode();
    let ptr = prev;

    /*递归法
    function iterator(node) {
        if (node.next) iterator(node.next);
        ptr.next = node;
        ptr = node;
    }

    iterator(head);
    head.next = null;
    */

    //迭代法
    let hhead = new ListNode();
    hhead.next = head;
    let tail, ttail;
    while (hhead.next) {
        tail = head;
        ttail = hhead;
        while (tail.next) {
            tail = tail.next;
            ttail = ttail.next;
        }
        ptr.next = tail;
        ptr = tail;
        ttail.next = null;
    }

    return prev.next;
};