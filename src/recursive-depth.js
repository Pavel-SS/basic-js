import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let deep = 1;
    let newArr = [];
    if (arr.find(e => Array.isArray(e)) !== undefined) {
      for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
          newArr.push(arr[i][j]);
        }
      }
      deep += this.calculateDepth(newArr);
      return deep;
    }else{
      return deep;
    }
  }
};