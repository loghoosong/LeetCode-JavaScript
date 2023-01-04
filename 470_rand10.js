/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    let r1, r2;
    do {
        r1 = rand7();
    } while (r1 == 7);
    r1 = r1 % 2;
    do {
        r2 = rand7();
    } while (r2 > 5);

    return 2 * r2 - r1;
};

function rand7() {
    return Math.floor(1 + Math.random() * 7)
}