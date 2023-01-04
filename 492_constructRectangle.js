/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    const sqrt = Math.floor(Math.sqrt(area));
    let w = sqrt;
    for (; w >= 1; w--) {
        if (area % w == 0) break;
    }
    return [area / w, w];
};