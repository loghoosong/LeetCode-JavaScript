/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k == 1) return head;

    function swapNext(node1, node2) {
        let temp = node1.next;
        node1.next = node2.next;
        node2.next = temp;

        temp = node1.next.next;
        node1.next.next = node2.next.next;
        node2.next.next = temp;
    }


    let ret = new ListNode();
    ret.next = head;
    let lastKTail = ret;

    const midK = k >> 1;
    while (true) {
        head = lastKTail;
        for (let i = 0; i < k; i++) {
            head = head.next;
            if (!head) return ret.next;
        }
        let first = lastKTail.next;

        for (let i = 0; i < midK; i++) {
            let left = lastKTail;
            for (let j = 0; j < i; j++) {
                left = left.next;
            }
            let right = left;
            for (let j = 0; j < k - 2 * i - 1; j++) {
                right = right.next;
            }
            swapNext(left, right);
        }

        lastKTail = first;
    }
};