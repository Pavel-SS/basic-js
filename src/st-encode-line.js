import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arrToStr = [];
  let strToArr = str.split('');
  let count = 0;
  for(let i=0; i <= strToArr.length; i++) {  
    if(strToArr[i] == strToArr[i+1]){ 
      count++;
    }else {
      arrToStr.push((count ? count + 1 : '') + strToArr[i]);
      count = 0;
    }
    }
    return arrToStr.join('');
  
}