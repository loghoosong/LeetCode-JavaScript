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
    let copyHead = head;
    let nextNum = copyHead;
    while (copyHead) {
        while (nextNum && nextNum.val == copyHead.val) {
            nextNum = nextNum.next;
        }
        copyHead.next = nextNum;
        copyHead = nextNum;
    }

    return head;
};