const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

const membersArr = ['Olivia', 1111, 'Lily', 'Oscar', true, null];

function createDreamTeam(arr) {
  let namesArr = [];
  arr.forEach((item, index) => {
    if (typeof item === 'string') {
      namesArr.push(item[0].toUpperCase());
    }
  });
  namesArr.sort();
  return namesArr;
}

module.exports = {
  createDreamTeam,
};
