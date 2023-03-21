/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
    const avg = s.length / 4;
    const cnt = [0, 0, 0, 0];

    const idx = char => {
        switch (char) {
            case 'Q':
                return 0;
            case 'W':
                return 1;
            case 'E':
                return 2;
            case 'R':
                return 3;
        }
    }

    const check = () => {
        if (cnt[0] > avg || cnt[1] > avg || cnt[2] > avg || cnt[3] > avg) {
            return false;
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        cnt[idx(s[i])]++;
    }
    if (check()) return 0;

    let ans = s.length;
    let left = 0, right = 0;
    while (right <= s.length) {
        if (check()) {
            ans = Math.min(ans, right - left);
            cnt[idx(s[left])]++;
            left++;
        } else {
            if (right === s.length) break;
            cnt[idx(s[right])]--;
            right++;
        }
    }

    return ans;
};