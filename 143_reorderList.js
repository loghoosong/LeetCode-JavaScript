/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return;

    let record = [];
    let copy = head;
    while (copy) {
        record.push(copy);
        copy = copy.next;
    }

    let tailIdx = record.length - 1;
    let headIdx = 0;
    while (true) {
        if (tailIdx != headIdx) {
            record[headIdx].next = record[tailIdx];
        } else {
            record[headIdx].next = null;
            break;
        }
        headIdx++;
        if (tailIdx != headIdx) {
            record[tailIdx].next = record[headIdx];
        } else {
            record[headIdx].next = null;
            break;
        }
        tailIdx--;
    }
};