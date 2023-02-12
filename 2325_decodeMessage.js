/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    function Key(str) {
        this.key = new Array(26).fill(0);
        for (let i = 0, pt = 97; i < str.length && pt <= 122; i++) {
            if (str[i] === ' ') continue;
            const idx = str[i].codePointAt() - 97;
            if (!this.key[idx]) {
                this.key[idx] = String.fromCodePoint(pt++);
            }
        }
    }

    Key.prototype.decode = function (char) {
        return char === ' ' ?
            char :
            this.key[char.codePointAt() - 97];
    }

    const k = new Key(key);
    let ans = '';
    for (let i = 0; i < message.length; i++) {
        ans += k.decode(message[i]);
    }
    return ans;
};