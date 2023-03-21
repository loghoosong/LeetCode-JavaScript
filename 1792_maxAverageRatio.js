/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
    const heap = new Heap((a, b) => {
        const val1 = (b[1] + 1) * b[1] * (a[1] - a[0]);
        const val2 = (a[1] + 1) * a[1] * (b[1] - b[0]);
        return val1 > val2;
    });
    classes.map(c => { heap.push(c) });

    for (let i = 0; i < extraStudents; i++) {
        const front = heap.front();
        front[0]++;
        front[1]++;
        heap.down(1);
    }

    let sum = 0;
    for (let i = 1; i <= classes.length; i++) {
        sum += heap.heap[i][0] / heap.heap[i][1];
    }
    return sum / classes.length;
};

class Heap {
    constructor(compare) {
        this.compare = typeof (compare) === 'function'
            ? compare : this.defaultCompare;
        this.heap = [0];
    }

    defaultCompare(a, b) {
        return a > b;
    }

    front() {
        return this.heap[1];
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    up(idx) {
        const h = this.heap;
        while (idx > 1 && this.compare(h[idx], h[idx >> 1])) {
            this.swap(idx, idx >> 1);
            idx >>= 1;
        }
    }

    down(idx) {
        const h = this.heap;
        const len = h.length;
        while ((idx << 1) < len) {
            let child = idx << 1;
            if (child + 1 < len && this.compare(h[child + 1], h[child])) child++;
            if (!this.compare(h[child], h[idx])) break;
            this.swap(idx, child);
            idx = child;
        }
    }

    push(val) {
        this.heap.push(val);
        this.up(this.heap.length - 1);
    }

    pop() {
        this.swap(1, this.heap.length - 1);
        const ret = this.heap.pop();
        this.down(1);

        return ret;
    }
}

console.log(
    maxAverageRatio([[1, 2], [3, 5], [2, 2]], 2));