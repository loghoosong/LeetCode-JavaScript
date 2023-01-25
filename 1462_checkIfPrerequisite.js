/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    const connected = new Array(numCourses).fill()
        .map(() => new Array(numCourses).fill(false));
    for (let i = 0; i < numCourses; i++) {
        connected[i][i] = true;
    }

    const g = new Array(numCourses).fill().map(() => new Array());
    const degree = new Array(numCourses).fill(0);

    //构建图
    for (let i = 0; i < prerequisites.length; i++) {
        g[prerequisites[i][0]].push(prerequisites[i][1]);
        degree[prerequisites[i][1]]++;
    }

    //拓扑排序
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (degree[i] === 0) queue.push(i);
    }

    const pres = [];
    while (queue.length !== 0) {
        const temp = [];
        for (let p of queue) {
            pres.push(p);
            for (let e of g[p]) {
                if (--degree[e] === 0) {
                    temp.push(e);
                }
                for (let pre of pres) {
                    if (connected[pre][p]) connected[pre][e] = true;
                }
            }
        }
        queue = temp;
    }

    const ans = new Array(queries.length).fill(false);
    queries.map((v, i) => ans[i] = connected[v[0]][v[1]]);
    return ans;
};