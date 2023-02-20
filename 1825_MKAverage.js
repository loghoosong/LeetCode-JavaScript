/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
    this.m = m;
    this.k = k;
    this.queue = [];
    this.head = new Heap();//头部，从大到小
    this.tail = new Heap((a, b) => a < b);//尾部，从小到大
    this.mid1 = new Heap((a, b) => a < b);//中部，两个堆，分别用来获取最大最小值
    this.mid2 = new Heap();
    this.midSum = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
    const { queue, m, k, head, mid1, mid2, tail } = this;
    queue.push(num);
    if (queue.length <= k) {
        head.push(num);
    } else if (queue.length <= (k << 1)) {
        if (num < head.front()) {
            head.push(num);
            num = head.pop();
        }
        tail.push(num);
    } else {
        //弹出一个最靠前的，并移除
        if (queue.length > m) {
            const rm = queue.shift();
            if (rm <= head.front()) {
                head.remove(rm);
            } else if (rm >= tail.front()) {
                tail.remove(rm);
            } else {
                mid1.remove(rm);
                mid2.remove(rm);
                this.midSum -= rm;
            }
        }

        //把num加入,处理数量的平衡
        if (head.front() && num < head.front()) {
            head.push(num);
            if (head.size() > k) num = head.pop();
        }
        if (tail.front() && num > tail.front()) {
            tail.push(num);
            if (tail.size() > k) num = tail.pop();
        }
        if (head.size() + tail.size() + mid1.size() < m) {
            //先放入mid
            mid1.push(num);
            mid2.push(num);
            this.midSum += num;
            //判断两端的size，如果两边数量少，就从中间弹出再压入
            if (head.size() < k) {
                num = mid1.pop();
                mid2.remove(num);
                head.push(num);
                this.midSum -= num;
            }
            if (tail.size() < k) {
                num = mid2.pop();
                mid1.remove(num);
                tail.push(num);
                this.midSum -= num;
            }
        }
    }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
    return this.queue.length < this.m
        ? -1 : Math.trunc(this.midSum / (this.m - this.k * 2));
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */

class Heap {
    constructor(compare) {
        this.compare = typeof (compare) === 'function'
            ? compare : this.defaultCompare;
        this.heap = [0];
        this.trash = new Map();//用来实现remove功能
        this.trashCnt = 0;
    }

    defaultCompare(a, b) {
        return a > b;
    }

    size() {
        return this.heap.length - 1 - this.trashCnt;
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

        //如果在垃圾桶里，就弹出
        while (this.trash.has(this.front())) {
            const n = this.trash.get(this.front());
            if (n === 1) {
                this.trash.delete(this.front());
            } else {
                this.trash.set(this.front(), n - 1);
            }
            this.trashCnt--;

            this.swap(1, this.heap.length - 1);
            this.heap.pop();
            this.down(1);
        }

        return ret;
    }

    remove(val) {
        if (this.front() === val) {
            this.pop();
            return;
        }
        //放入垃圾桶，在pop时处理
        const n = this.trash.get(val) || 0;
        this.trash.set(val, n + 1);
        this.trashCnt++;
    }
}