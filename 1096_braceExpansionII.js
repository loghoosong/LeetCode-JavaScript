/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
    const union = (set1, set2) => {
        const res = new Set();
        set1.forEach(element => { res.add(element); });
        set2.forEach(element => { res.add(element); });
        return res;
    }

    const cartesianProduct = (set1, set2) => {
        const res = new Set();
        set1.forEach(ele1 => {
            set2.forEach(ele2 => {
                res.add(ele1 + ele2)
            });
        });
        return res;
    }

    const opsStack = [], setStack = [];
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === ',') {
            //如果栈顶是乘法，先把乘法做完，再添加并集
            if (opsStack[opsStack.length - 1] === 'cp') {
                let set2 = setStack.pop();
                while (opsStack[opsStack.length - 1] === 'cp') {
                    opsStack.pop();
                    let set1 = setStack.pop();
                    set2 = cartesianProduct(set1, set2);
                }
                setStack.push(set2);
            }
            opsStack.push('union');
        } else if (expression[i] === '{') {
            if (i > 0 && expression[i - 1] !== ',' && expression[i - 1] !== '{') {
                opsStack.push('cp');
            }
            opsStack.push('{');
        } else if (expression[i] === '}') {
            //计算，直到遇见左括号
            let set2 = setStack.pop();
            let lastOp = opsStack.pop();
            while (lastOp !== '{') {
                let set1 = setStack.pop();
                if (lastOp === 'union') {
                    set2 = union(set1, set2);
                } else {
                    set2 = cartesianProduct(set1, set2);
                }
                lastOp = opsStack.pop();
            }
            setStack.push(set2);
        } else {
            if (i > 0 && expression[i - 1] !== ',' && expression[i - 1] !== '{') {
                opsStack.push('cp');
            }
            setStack.push(new Set([expression[i]]));
        }
    }

    let set2 = setStack.pop();
    while (opsStack.length > 0) {
        opsStack.pop();
        let set1 = setStack.pop();
        set2 = cartesianProduct(set1, set2);
    }

    return Array.from(set2).sort();
};