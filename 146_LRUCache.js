/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.len = capacity;
    this.nodeMap = new Map();
    this.head = new DLinkedNode();
    this.tail = new DLinkedNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.nodeMap.has(key)) {
        let node = this.nodeMap.get(key);
        let h = this.head.next;
        if (h != node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.head.next = node;
            node.prev = this.head;
            h.prev = node;
            node.next = h;
        }
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.nodeMap.has(key)) {
        let node = this.nodeMap.get(key);
        node.val = value;
        let h = this.head.next;
        if (h != node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.head.next = node;
            node.prev = this.head;
            h.prev = node;
            node.next = h;
        }
    } else {
        let node = new DLinkedNode(key, value);
        this.nodeMap.set(key, node);
        let h = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        h.prev = node;
        node.next = h;
        if (this.nodeMap.size > this.len) {
            let t = this.tail.prev;
            t.prev.next = this.tail;
            this.tail.prev = t.prev;
            this.nodeMap.delete(t.key)
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class DLinkedNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}