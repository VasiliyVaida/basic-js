const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  let cloneArr = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-prev' && i != 0) {
      cloneArr.splice(i - 1, 1);
      cloneArr.splice(i, 1);
    }

    if (arr[i] == '--discard-next' && i != arr.length - 1) {
      cloneArr.splice(i + 1, 1);
      cloneArr.splice(i, 1);
    }

    if (arr[i] == '--double-next' && i != arr.length - 1) {
      cloneArr.splice(i + 1, 0, arr[i + 1]);
      cloneArr.splice(i, 1);
    }

    if (arr[i] == '--double-prev' && i != 0) {
      cloneArr.splice(i + 1, 0, arr[i - 1]);
      cloneArr.splice(i, 1);
    }
  }

  if (cloneArr[0] === '--discard-prev' || cloneArr[0] === '--double-prev') {
    cloneArr.splice(0, 1);
  }

  if (cloneArr[arr.length - 1] === '--double-next' || cloneArr[arr.length - 1] === '--discard-next') {
    cloneArr.splice(arr.length - 1, 1);
  }

  return cloneArr;
}

module.exports = {
  transform,
};
