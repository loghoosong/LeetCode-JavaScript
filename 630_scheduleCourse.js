import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
    courses.sort((a, b) => a[1] - b[1]);

    let total = 0;
    const q = new MaxPriorityQueue();
    courses.map(c => {
        if (c[0] + total <= c[1]) {
            total += c[0];
            q.enqueue(c[0]);
        } else if (!q.isEmpty() && c[0] < q.front().element) {
            total += c[0] - q.dequeue().element;
            q.enqueue(c[0]);
        }
    });

    return q.size();
};