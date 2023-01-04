/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let chars = Array.from(s);
    let vowelsIdx = [];
    chars.map((char, idx) => {
        if (vowels.has(char)) vowelsIdx.push(idx);
    });

    let left = 0, right = vowelsIdx.length - 1;
    while (left < right) {
        const temp = chars[vowelsIdx[left]];
        chars[vowelsIdx[left]] = chars[vowelsIdx[right]];
        chars[vowelsIdx[right]] = temp;
        left++;
        right--;
    }

    return chars.join('');
};