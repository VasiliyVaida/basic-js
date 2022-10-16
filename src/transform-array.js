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

  let cloneArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i - 1] !== '--discard-next') {
        cloneArr.push(arr[i]);
      }
    }

    if (arr[i] == '--discard-prev' && i != 0) {
      if (arr[i - 2] !== '--discard-next') {
        cloneArr.pop();
      }
    }

    if (arr[i] == '--double-next' && i != arr.length - 1) {
      cloneArr.push(arr[i + 1]);
    }

    if (arr[i] == '--double-prev' && i != 0) {
      if (arr[i - 2] !== '--discard-next') {
        cloneArr.push(arr[i - 1]);
      }
    }
  }

  return cloneArr;
}

module.exports = {
  transform,
};
