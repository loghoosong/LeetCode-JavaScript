/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function (trees) {
    let treesLen = trees.length;
    if (treesLen <= 3) return trees;

    function calVartexCos(start1, end1, start2, end2) {
        const x1 = end1[0] - start1[0];
        const y1 = end1[1] - start1[1];
        const x2 = end2[0] - start2[0];
        const y2 = end2[1] - start2[1];
        return (x1 * x2 + y1 * y2) / (Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2)));
    }

    function furthestPointIndex(startPoint, endPointArr) {
        const len = endPointArr.length;
        let dis = 0;
        let index = 0;
        for (let i = 0; i < len; i++) {
            const x = endPointArr[i][0] - startPoint[0];
            const y = endPointArr[i][1] - startPoint[1];
            const d = x * x + y * y;
            if (d > dis) {
                index = i;
                dis = d;
            }
        }
        return index;
    }

    let ans = [];
    let treesSet = new Set(trees);

    let minX = 128;
    for (let tree of treesSet) {
        if (tree[0] < minX) {
            ans = [tree];
            minX = tree[0];
        } else if (tree[0] == minX) {
            ans.push(tree);
        }
    }
    ans.sort((a, b) => a[1] - b[1]);
    let current = ans[0];
    let last = [current[0], current[1] + 1];

    for (let i = 0; i < ans.length - 1; i++) {
        treesSet.delete(ans[i]);
    }

    const ERR = 0.00001;
    while (true) {
        let maxCos = -1;
        let tempAns = [];
        for (let tree of treesSet) {
            let cos = calVartexCos(last, current, current, tree);
            if (cos > maxCos + ERR) {
                tempAns = [tree];
                maxCos = cos;
            } else if (Math.abs(cos - maxCos) < ERR) {
                tempAns.push(tree);
            }
        }

        last = current;
        let index = furthestPointIndex(current, tempAns);
        current = tempAns[index];
        if (ans.indexOf(current) >= 0) {
            tempAns.splice(index, 1);
            ans = ans.concat(tempAns);
            break;
        } else {
            ans = ans.concat(tempAns);
            tempAns.forEach(t => treesSet.delete(t));
        }
    }
    return ans;
};