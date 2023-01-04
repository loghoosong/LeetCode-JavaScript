/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    if (s.length <= 10) return [];

    let n = 0;
    for (let i = 0; i < 10; i++) {
        switch (s[i]) {
            case 'A':
                n = n << 2;
                break;
            case 'C':
                n = (n << 2) + 1;
                break;
            case 'G':
                n = (n << 2) + 2;
                break;
            case 'T':
                n = (n << 2) + 3;
        }
    }

    let recordSet = new Set();
    let ansSet = new Set();
    recordSet.add(n);
    for (let i = 10; i < s.length; i++) {
        n &= 0x3ffff;
        switch (s[i]) {
            case 'A':
                n = n << 2;
                break;
            case 'C':
                n = (n << 2) + 1;
                break;
            case 'G':
                n = (n << 2) + 2;
                break;
            case 'T':
                n = (n << 2) + 3;
        }
        if (recordSet.has(n)) {
            ansSet.add(n);
        } else {
            recordSet.add(n);
        }
    }

    let ans = [];
    for (let num of ansSet) {
        let str = '';
        for (let i = 0; i < 10; i++) {
            switch (num & 3) {
                case 0:
                    str = 'A' + str;
                    break;
                case 1:
                    str = 'C' + str;
                    break;
                case 2:
                    str = 'G' + str;
                    break;
                case 3:
                    str = 'T' + str;
            }
            num >>= 2;
        }
        ans.push(str);
    }
    return ans;
};