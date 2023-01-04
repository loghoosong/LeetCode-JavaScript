/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    function reSortFirstItem() {
        if (lists.length == 1) return;
        if (lists[0].val <= lists[1].val) return;

        const first = lists.shift();
        const len = lists.length;
        let start = 0;
        let end = len;
        while (start <= end) {
            const mid = (end + start) >> 1;
            if (mid >= len || lists[mid].val < first.val) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        lists.splice(start, 0, first);
    }

    let ans = new ListNode();
    let head = ans;

    let idx = lists.indexOf(null);;
    while (idx >= 0) {
        lists.splice(idx, 1);
        idx = lists.indexOf(null, idx);
    }

    let len = lists.length;
    lists.sort((a, b) => a.val - b.val);
    while (len > 0) {
        head.next = new ListNode(lists[0].val);
        head = head.next;
        lists[0] = lists[0].next;
        if (lists[0]) {
            reSortFirstItem();
        } else {
            lists.shift();
            len--;
        }
    }

    return ans.next;
};