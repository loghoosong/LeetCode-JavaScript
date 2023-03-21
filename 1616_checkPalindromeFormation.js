/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function (a, b) {
    const check = (s1, s2) => {
        let left = 0, right = s1.length - 1;
        while (left < right) {
            if (s1[left] !== s2[right]) {
                return isPalindrome(s1, left, right)
                    || isPalindrome(s2, left, right);
            }
            left++;
            right--;
        }
        return true;
    }

    const isPalindrome = (str, left = 0, right = str.length - 1) => {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    return check(a, b) || check(b, a);
};