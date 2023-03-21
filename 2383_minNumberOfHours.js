/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
    const minEnergy = energy.reduce((s, v) => s + v, 1);
    let minExperience = 1, s = -1;
    experience.map(v => {
        minExperience = Math.max(minExperience, v - s);
        s += v;
    });

    return Math.max(minEnergy - initialEnergy, 0)
        + Math.max(minExperience - initialExperience, 0);
};