/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let edges = new Array(numCourses).fill(0).map(() => new Array);
    let visited = new Array(numCourses).fill(0);
    let ans = true;

    prerequisites.map(p => edges[p[0]].push(p[1]));

    function dfs(n) {
        visited[n] = 1;
        for (let pt of edges[n]) {
            if (visited[pt] == 0) {
                dfs(pt);
                if (!ans) return;
            } else if (visited[pt] == 1) {
                ans = false;
                return;
            }
        }
        visited[n] = 2;
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] == 0) dfs(i);
        if (!ans) return false;
    }
    return ans;
};