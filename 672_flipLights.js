/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
var flipLights = function (n, presses) {
    let ansSet = new Set();
    let light1 = false, light2 = false, light3 = false, light4 = false;
    function recordLight(switch1 = false, switch2 = false, switch3 = false, switch4 = false) {
        let lights = 0;
        if (n >= 4) {
            light4 = switch1 ^ switch2 ^ switch4;
            if (light4) lights |= 0b1000;
        }
        if (n >= 3) {
            light3 = switch1 ^ switch3;
            if (light3) lights |= 0b100;
        }
        if (n >= 2) {
            light2 = switch1 ^ switch2;
            if (light2) lights |= 0b10;
        }
        light1 = switch1 ^ switch3 ^ switch4;
        if (light1) lights |= 0b1;

        ansSet.add(lights);
    }

    if (presses == 0) return 1;
    if (presses == 1) {
        recordLight(true);
        recordLight(false, true);
        recordLight(false, false, true);
        recordLight(false, false, false, true);
    } else if (presses == 2) {
        recordLight();
        recordLight(true, true);
        recordLight(true, false, true);
        recordLight(true, false, false, true);
        recordLight(false, true, true, false);
        recordLight(false, true, false, true);
        recordLight(false, false, true, true);
    } else {
        let result = Boolean(presses & 1);
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 2; k++) {
                    let l = result ^ i ^ j ^ k;
                    recordLight(i, j, k, l);
                }
            }
        }
    }

    return ansSet.size;
};