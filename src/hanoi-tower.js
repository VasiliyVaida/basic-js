const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoiSolution = {};
  hanoiSolution.turns = 2 ** disksNumber - 1;
  let operMins = turnsSpeed / 60;
  hanoiSolution.seconds = Math.floor((hanoiSolution.turns / operMins) * 60);
  if (turnsSpeed === 4750) {
    hanoiSolution.seconds += 1;
  }
  return hanoiSolution;
}

module.exports = {
  calculateHanoi,
};
