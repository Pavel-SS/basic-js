import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let {repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'} = options;
  let result = '';
    for (let i = 1; i <= repeatTimes; i++) {
      if (i > 1){ result += separator;}
  
      result += str;
  
      for (let j = 1; j <= additionRepeatTimes; j++) {
        if (j > 1) {result += additionSeparator;}
        
        result += addition;
      }
    }
    return result;
};
