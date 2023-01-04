/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
    this.rects = rects;
    this.areas = [0];
    rects.forEach((rect, index) => {
        this.areas.push(this.areas[index] + (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1));
    });
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
    function binaryFind(target, arr) {
        let max = arr.length - 1;
        let min = 0;
        while (true) {
            let current = Math.trunc((max - min) / 2) + min;
            if (target < arr[current]) {
                if (target >= arr[current - 1]) return current;
                max = current - 1;
            } else {
                min = current + 1;
            }
        }
    }

    let rand = Math.floor(Math.random() * this.areas[this.rects.length]);
    const nthRect = binaryFind(rand, this.areas) - 1;

    rand -= this.areas[nthRect];
    const rect = this.rects[nthRect];
    const x = rect[0] + Math.trunc(rand / (rect[3] - rect[1] + 1));
    const y = rect[1] + rand % (rect[3] - rect[1] + 1);
    return [x, y];

};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */