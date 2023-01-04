/**
 * @param {number} n
 */
var ExamRoom = function (n) {
    this.seats = [];
    this.n = n;
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
    const { seats, n } = this;
    //没人入座
    if (seats.length === 0) {
        seats.push(0);
        return 0;
    }

    //超过1个已经入座的
    const leftDis = seats[0];
    const rightDis = n - 1 - seats[seats.length - 1];
    if (seats.length > 1) {
        let maxDis = 0, idx = -1;
        for (let i = 0; i < seats.length - 1; i++) {
            const dis = (seats[i + 1] - seats[i]) >> 1;
            if (dis < rightDis || dis <= leftDis) {
                continue;
            } else if (dis > maxDis) {
                maxDis = dis;
                idx = i;
            }
        }
        if (idx !== -1) {
            const val = seats[idx] + maxDis;
            seats.splice(idx + 1, 0, val);
            return val;
        }
    }

    //如果只有1个已经入座的
    if (rightDis > leftDis) {
        seats.push(n - 1);
        return n - 1;
    } else {
        seats.unshift(0);
        return 0;
    }
};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
    const { seats } = this;
    let start = 0, end = seats.length - 1;
    while (start <= end) {
        const mid = start + end >> 1;
        if (seats[mid] === p) {
            start = mid;
            break;
        } else if (seats[mid] > p) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    seats.splice(start, 1);
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */

let e = new ExamRoom(10);
e.seat();
e.seat();
e.seat();
e.seat();
e.seat();
e.seat();
e.leave(4)
console.log(e.seats);