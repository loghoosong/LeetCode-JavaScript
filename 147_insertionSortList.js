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
var insertionSortList = function (head) {
    let prev = new ListNode();
    prev.next = head;
    let tail = head;
    while (tail.next) {
        let node = tail.next;
        if (node.val >= tail.val) {
            tail = node;
            continue;
        }

        tail.next = node.next;
        let p = prev;
        while (p) {
            if (node.val <= p.next.val) {
                node.next = p.next;
                p.next = node;
                break;
            }
            p = p.next;
        }
    }

    return prev.next;
};