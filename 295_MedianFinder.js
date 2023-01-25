var MedianFinder = function () {
    this.maxHeap = new Heap((a, b) => a < b);
    this.minHeap = new Heap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    const { maxHeap, minHeap } = this;
    if (minHeap.list.length === 0 || num <= minHeap.list[0]) {
        minHeap.push(num);
        if (minHeap.list.length - 1 > maxHeap.list.length) {
            maxHeap.push(minHeap.pop());
        }
    } else {
        maxHeap.push(num);
        if (maxHeap.list.length > minHeap.list.length) {
            minHeap.push(maxHeap.pop());
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    return this.minHeap.list.length <= this.maxHeap.list.length ?
        (this.maxHeap.list[0] + this.minHeap.list[0]) / 2 : this.minHeap.list[0];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
    constructor(compare) {
        this.list = [];
        this.compare =
            typeof compare === 'function' ? compare : this.defaultCompare;
    }

    defaultCompare(a, b) {
        return a > b;
    }

    swap(idx1, idx2) {
        const temp = this.list[idx1];
        this.list[idx1] = this.list[idx2];
        this.list[idx2] = temp;
    }

    left(x) {
        return (x << 1) + 1;
    }

    parent(x) {
        return (x - 1) >> 1;
    }

    shiftUp(idx) {
        const { list, compare, parent } = this;
        let pIdx = parent(idx);
        while (idx !== 0 && compare(list[idx], list[pIdx])) {
            this.swap(pIdx, idx);
            idx = pIdx;
            pIdx = parent(idx);
        }
    }

    shiftDown(idx) {
        const { list, compare, left } = this;
        let minChild = left(idx);
        while (minChild < list.length) {
            if (minChild + 1 < list.length && compare(list[minChild + 1], list[minChild])) {
                minChild++;
            }
            if (compare(list[minChild], list[idx])) {
                this.swap(idx, minChild);
                idx = minChild;
                minChild = left(idx);
            } else {
                break;
            }
        }
    }

    push(val) {
        this.list.push(val);
        this.shiftUp(this.list.length - 1);
    }

    pop() {
        this.swap(0, this.list.length - 1);
        const ret = this.list.pop();
        this.shiftDown(0);
        return ret;
    }
}


let h = new Heap();

h.push(5);
h.push(1);
h.push(8);
h.push(9);
h.push(4);
h.push(3);
h.push(6);
console.log(h.list)