/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let ptr;
    ptr = list1;
    for (let i = 1; i < a; i++) {
        ptr = ptr.next;
    }
    const idxA = ptr;
    for (let i = a - 1; i <= b; i++) {
        ptr = ptr.next;
    }
    const idxBNext = ptr;

    ptr = list2;
    while (ptr.next) {
        ptr = ptr.next;
    }
    const end2 = ptr;

    idxA.next = list2;
    end2.next = idxBNext;
    return list1;
};