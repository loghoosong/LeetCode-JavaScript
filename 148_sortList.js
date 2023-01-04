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
var sortList = function (head) {
    function merge(h1, h2) {
        let prev = new ListNode();
        let p = prev;
        while (h1 && h2) {
            if (h1.val < h2.val) {
                p.next = h1;
                h1 = h1.next;
            } else {
                p.next = h2;
                h2 = h2.next;
            }
            p = p.next;
        }
        if (h1) p.next = h1;
        if (h2) p.next = h2;
        return prev.next;
    }

    function divid(prev, n) {
        let p = prev;
        let node = p.next;
        while (node) {
            let part1 = node;
            for (let count = 1; node && count < n; count++) {
                node = node.next;
            }
            if (!node) return;

            let part2 = node.next;
            node.next = null;
            node = part2;
            for (let count = 1; node && count < n; count++) {
                node = node.next;
            }
            if (!node) {
                p.next = merge(part1, part2);
                return;
            } else {
                let part3 = node.next;
                node.next = null;
                node = part3;
                p.next = merge(part1, part2);
                while (p.next) {
                    p = p.next;
                }
                p.next = part3;
            }
        }
    }

    let len = 0;
    let copy = head;
    while (copy) {
        copy = copy.next;
        len++;
    }

    let prev = new ListNode();
    prev.next = head;
    for (let i = 1; i < len; i <<= 1) {
        divid(prev, i);
    }
    return prev.next;
};