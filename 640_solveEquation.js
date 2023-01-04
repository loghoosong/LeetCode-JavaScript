/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
    let xLeft = 0;
    let numRight = 0;
    let sign = 1;
    let leftOrRight = 1;
    let xDefaultMul = 1;
    let singelNum = 0;
    for (let s of equation) {
        switch (s) {
            case 'x':
                xLeft += leftOrRight * sign * Math.max(singelNum, xDefaultMul);
                xDefaultMul = 1;
                singelNum = 0;
                sign = 1;
                break;
            case '+':
                numRight -= leftOrRight * sign * singelNum;
                xDefaultMul = 1;
                singelNum = 0;
                sign = 1;
                break;
            case '-':
                numRight -= leftOrRight * sign * singelNum;
                xDefaultMul = 1;
                singelNum = 0;
                sign = -1;
                break;
            case '=':
                numRight -= leftOrRight * sign * singelNum;
                xDefaultMul = 1;
                singelNum = 0;
                sign = 1;
                leftOrRight = -1;
                break;
            default:
                singelNum = singelNum * 10 + +s;
                xDefaultMul = 0;
        }
    }
    numRight -= leftOrRight * sign * singelNum;

    if (xLeft == 0 && numRight == 0) {
        return 'Infinite solutions';
    } else if (numRight % xLeft == 0) {
        return 'x=' + numRight / xLeft;
    } else {
        return 'No solution';
    }
};
console.log(solveEquation("x+5-3+x=6+x-2"));