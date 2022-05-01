const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = [];
  let mailArr = email.split('');
  let mailIndex;
  mailArr.forEach((item, index) => {
    if (item === '@' && mailArr[index + 1] !== '.') {
      mailIndex = index;
    }

    if (index > mailIndex) {
      res.push(item);
    }
  });
  return res.join('');
}

module.exports = {
  getEmailDomain,
};
