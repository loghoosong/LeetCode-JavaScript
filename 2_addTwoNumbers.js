/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let node1 = l1;
    let node2 = l2;
    let ans = new ListNode();
    let nodeAns = ans;
    while (node1 || node2 || carry == 1) {
        let valAns = carry;
        if (node1) {
            valAns += node1.val;
            node1 = node1.next;
        }
        if (node2) {
            valAns += node2.val;
            node2 = node2.next;
        }
        if (valAns > 9) {
            valAns -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        nodeAns.next = new ListNode();
        nodeAns = nodeAns.next;
        nodeAns.val = valAns;
    }
    return ans.next;
};