/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let prev = new ListNode();
    let p = prev;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            p.next = list1;
            list1 = list1.next;
        } else {
            p.next = list2;
            list2 = list2.next;
        }
        p = p.next;
    }

    if (list1) p.next = list1;
    if (list2) p.next = list2;

    return prev.next;
};