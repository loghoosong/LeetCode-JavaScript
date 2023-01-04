/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    let isPalindrom = new Array(s.length).fill(0).map(() => new Array(s.length).fill(true));
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            isPalindrom[i][j] = isPalindrom[i + 1][j - 1] && (s[i] == s[j]);
        }
    }

    let cuts = new Array(s.length).fill(Infinity);
    cuts[0] = 0;
    for (let i = 1; i < s.length; i++) {
        if (isPalindrom[0][i]) {
            cuts[i] = 0;
        } else {
            cuts[i] = cuts[i - 1] + 1;
            for (let j = 0; j < i; j++) {
                if (isPalindrom[j + 1][i]) {
                    cuts[i] = Math.min(cuts[i], cuts[j] + 1);
                }
            }
        }
    }

    return cuts[s.length - 1];
};

console.log(minCut('apjesgpsxoeiokmqmfgvjslcjukbqxpsobyhjpbgdfruqdkeiszrlmtwgfxyfostpqczidfljwfbbrflkgdvtytbgqalguewnhvvmcgxboycffopmtmhtfizxkmeftcucxpobxmelmjtuzigsxnncxpaibgpuijwhankxbplpyejxmrrjgeoevqozwdtgospohznkoyzocjlracchjqnggbfeebmuvbicbvmpuleywrpzwsihivnrwtxcukwplgtobhgxukwrdlszfaiqxwjvrgxnsveedxseeyeykarqnjrtlaliyudpacctzizcftjlunlgnfwcqqxcqikocqffsjyurzwysfjmswvhbrmshjuzsgpwyubtfbnwajuvrfhlccvfwhxfqthkcwhatktymgxostjlztwdxritygbrbibdgkezvzajizxasjnrcjwzdfvdnwwqeyumkamhzoqhnqjfzwzbixclcxqrtniznemxeahfozp'));