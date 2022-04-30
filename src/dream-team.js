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
  if (!Array.isArray(arr)) {
    return false;
  }
  let namesArr = [];
  arr.forEach((item, index) => {
    if (typeof item === 'string' && item[0] !== ' ') {
      namesArr.push(item[0].toUpperCase());
    } else if (typeof item === 'string' && item[0] === ' ') {
      let wordArr = item.split('');
      for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i] !== ' ') {
          namesArr.push(wordArr[i].toUpperCase());
          break;
        }
      }
    }
  });
  namesArr.sort();
  return namesArr.join('');
}

createDreamTeam(membersArr);

module.exports = {
  createDreamTeam,
};
