import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
   arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value !== undefined){
      value = `( ${value} )`;
    }else{
      value = `( )`;
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if ( position !== +position || position % 1 !== 0){
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!');
    };
    if (position < 1 || position > this.arr.length -1){
      this.arr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
      this.arr.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const finishChain = this.arr.join('~~');
    this.arr = [];
    return finishChain;
  }
};
