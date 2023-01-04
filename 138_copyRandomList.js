/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let arr = [];
    let preCopy = new Node();

    let n = new Node();
    let c = preCopy;
    n.next = head;
    while (n.next) {
        n = n.next;
        c.next = new Node(n.val);
        n.val = arr.length;
        c = c.next;
        arr.push(c);
    }

    n = new Node();
    c = preCopy;
    n.next = head;
    while (n.next) {
        n = n.next;
        c = c.next;
        if (n.random) {
            const i = n.random.val;
            c.random = arr[i];
        }
    }

    return preCopy.next;
};