/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.head = head;
    this.size = 0;
    while (head) {
        head = head.next;
        this.size++;
    }

};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let r = Math.floor(Math.random() * this.size);
    let head = this.head;
    while (r > 0) {
        head = head.next;
        r--;
    }
    return head.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */