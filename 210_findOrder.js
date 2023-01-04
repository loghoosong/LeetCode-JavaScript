/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let edges = new Array(numCourses).fill(0).map(() => new Array());
    let visited = new Array(numCourses).fill(0);
    let canFinish = true;
    let ans = [];

    prerequisites.map(p => edges[p[0]].push(p[1]));

    function dfs(n) {
        visited[n] = 1;
        for (let pt of edges[n]) {
            if (visited[pt] == 0) {
                dfs(pt);
                if (!canFinish) return;
            } else if (visited[pt] == 1) {
                canFinish = false;
                return;
            }
        }
        visited[n] = 2;
        ans.push(n);
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] == 0) dfs(i);
        if (!canFinish) return [];
    }

    return ans;
};