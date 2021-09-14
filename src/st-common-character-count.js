import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let count = 0,
      x = s1;
  for (let i = 0; i < s2.length; i++){
    if (x.includes(s2[i])){
      x = x.replace(s2[i], '');
      count++;
    }
  }
  return count;
}
