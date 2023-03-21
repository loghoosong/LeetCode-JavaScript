/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    const add = (a, b) => ((a << 16) | 1) * ((b << 16) | 1) >> 16;

    const a1 = a & 0xFFFF, a2 = a >> 16;
    const b1 = b & 0xFFFF, b2 = b >> 16;
    let c = add(a2, b2);
    if (b1 > (~a1 & 0xFFFF)) c = add(c, 1);
    c = c << 16 | add(a1, b1);
    return c;

    /*
    while (b != 0) {
        let carry = (a & b) << 1
        a = a ^ b;
        b = carry;
    }
    return a;
    */
};