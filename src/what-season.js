import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  const month = [
    'winter',
    'spring',
    'summer',
    'autumn',
    'winter'
  ]
  if (!date) {
    return 'Unable to determine the time of year!';
  } 
  if ( !date instanceof Date || typeof date !== 'object' || Object.keys(date).length > 0){
    throw new Error ('Invalid date!');
  }
  return month[parseInt((date.getMonth() + 1) / 3)];
}
