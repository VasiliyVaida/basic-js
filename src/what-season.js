const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let correctedDate = date;
  if (correctedDate === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (typeof correctedDate.getMonth !== 'function') {
    throw new Error('Invalid date!');
  }

  try {
    let monthUTC = correctedDate.getUTCMonth();
  } catch {
    throw new Error('Invalid date!');
  }

  // throw new ValidationError('Invalid date!');

  let month = correctedDate.getMonth();

  if (month >= 11 || month <= 1) {
    return 'winter';
  } else if (month > 1 && month <= 4) {
    return 'spring';
  } else if (month > 4 && month <= 7) {
    return 'summer';
  } else if (month > 7 && month <= 10) {
    return 'autumn';
  }
}
module.exports = {
  getSeason,
};
