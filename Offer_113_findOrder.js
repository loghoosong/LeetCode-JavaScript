/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const g = new Array(numCourses).fill().map(() => new Array());
    const indegree = new Array(numCourses).fill(0);

    prerequisites.map(pre => {
        indegree[pre[0]]++;
        g[pre[1]].push(pre[0]);
    });

    const queue = [];
    indegree.map((v, i) => {
        if (v === 0) queue.push(i);
    });

    const ans = [];
    while (queue.length > 0) {
        const q = queue.pop();
        ans.push(q);
        for (let e of g[q]) {
            if (--indegree[e] === 0) {
                queue.push(e);
            }
        }
    }

    return ans.length === numCourses ? ans : [];
};