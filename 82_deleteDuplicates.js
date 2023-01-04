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
var deleteDuplicates = function (head) {
    let ret = new ListNode(128);
    ret.next = head;
    head = ret;
    while (head) {
        let nextHead = head.next;
        if (!nextHead) break;
        let nextNext = nextHead.next;
        if (!nextNext) break;
        if (nextNext.val == nextHead.val) {
            do {
                nextNext = nextNext.next;
            } while (nextNext && nextNext.val == nextHead.val)
            head.next = nextNext;
        } else {
            head = head.next;
        }
    }

    return ret.next;
};