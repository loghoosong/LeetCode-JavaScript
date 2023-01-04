/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    function getLetters(n) {
        switch (n) {
            case '2':
                return ['a', 'b', 'c'];
            case '3':
                return ['d', 'e', 'f'];
            case '4':
                return ['g', 'h', 'i'];
            case '5':
                return ['j', 'k', 'l'];
            case '6':
                return ['m', 'n', 'o'];
            case '7':
                return ['p', 'q', 'r', 's'];
            case '8':
                return ['t', 'u', 'v'];
            case '9':
                return ['w', 'x', 'y', 'z'];
        }
    }

    let ans = [];
    for (let d of digits) {
        let letters = getLetters(d);
        if (ans.length == 0) {
            ans = [].concat(letters);
        } else {
            let newAns = [];
            for (let l of letters) {
                for (let a of ans) {
                    newAns.push(a + l);
                }
            }
            ans = [].concat(newAns);
        }
    }

    return ans;
};