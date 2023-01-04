/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
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
    let stack1 = [];
    let stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let stackAns = [];
    let carry = 0;
    while (stack1.length > 0 || stack2.length > 0) {
        const digit1 = stack1.pop() || 0;
        const digit2 = stack2.pop() || 0;
        let temp = digit1 + digit2 + carry;
        if (temp > 9) {
            temp -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        stackAns.push(temp);
    }
    if (carry == 1) stackAns.push(1);

    let headAns = new ListNode(stackAns.pop());
    let head = headAns;
    while (stackAns.length > 0) {
        head.next = new ListNode(stackAns.pop());
        head = head.next;
    }
    return headAns;
};