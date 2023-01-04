/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
    const MOD = 1000000007;
    let backlogBuy = new Heap((a, b) => a[0] > b[0]);
    let backlogSell = new Heap((a, b) => b[0] > a[0]);
    function help(order) {
        let amount = order[1];
        if (order[2] === 0) {
            while (amount > 0 && backlogSell.list.length > 0
                && backlogSell.list[0][0] <= order[0]) {
                if (backlogSell.list[0][1] > amount) {
                    backlogSell.list[0][1] -= amount;
                    amount = 0;
                    break;
                }
                amount -= backlogSell.pop()[1];
            }
            if (amount > 0) backlogBuy.push([order[0], amount, order[2]]);
        } else {
            while (amount > 0 && backlogBuy.list.length > 0
                && backlogBuy.list[0][0] >= order[0]) {
                if (backlogBuy.list[0][1] > amount) {
                    backlogBuy.list[0][1] -= amount;
                    amount = 0;
                    break;
                }
                amount -= backlogBuy.pop()[1];
            }
            if (amount > 0) backlogSell.push([order[0], amount, order[2]]);
        }
    }

    orders.map(order => help(order));
    const buy = backlogBuy.list.reduce((s, v) => (s + v[1]) % MOD, 0);
    return backlogSell.list.reduce((s, v) => (s + v[1]) % MOD, buy);
};

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