/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    let bulls = 0, cows = 0;

    let cntS = new Array(10).fill(0);
    let cntG = new Array(10).fill(0);
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        } else {
            cntS[+secret[i]]++;
            cntG[+guess[i]]++;
        }
    }

    for (let i = 0; i < 10; i++) {
        cows += Math.min(cntS[i], cntG[i]);
    }

    return bulls + 'A' + cows + 'B';
};