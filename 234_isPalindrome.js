/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    while (fast) {
        slow = slow.next;
        fast = fast.next;
        if (fast) {
            fast = fast.next;
        } else {
            break;
        }
    }

    let stack = [];
    while (slow) {
        stack.push(slow);
        slow = slow.next;
    }

    let node = head;
    while (stack.length > 0) {
        if (node.val != stack.pop().val) return false;
        node = node.next;
    }

    return true;
};