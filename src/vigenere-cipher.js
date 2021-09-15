import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(straight = true) {
    this.straight = straight;
  }
  encrypt(message, key) {

    if (message === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let x = Math.ceil(message.length / key.length);
    message = message.toUpperCase().split('');
    key = key.repeat(x).toUpperCase().split('');
    

    let chiper = [],
      posNum = 0;

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let count = -1;
        let indexSum = alphabet.indexOf(message[i]) + alphabet.indexOf(key[posNum]);
        let a = alphabet.length - 1 - indexSum;
        
        if (a < 0) {
          count = Math.abs(a) - 1;
        } else {
          count = indexSum;
        }
        chiper.push(alphabet[count]);
        posNum++;
      } else {
        chiper.push(message[i])
      }
    }

    if (!this.straight) {
      return chiper.reverse().join('');
    } else {
      return chiper.join('');
    }

  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error(`Incorrect arguments!`);
    }
    
    let x = Math.round(message.length / key.length);
    message = message.toUpperCase().split('');
    key = key.repeat(x).toUpperCase().split('');

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let chiper = [],
      posNum = 0;

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let count = 1;
        
        if (1 + (alphabet.indexOf(message[i]) > alphabet.indexOf(key[posNum]))) {
          count = alphabet.indexOf(message[i]) - alphabet.indexOf(key[posNum]);
        } else {
          count = alphabet.indexOf(key[posNum]) + alphabet.indexOf(message[i]);
        }

        if (count < 0) {
          count = alphabet.length + count;
        }

        chiper.push(alphabet[count]);

        posNum++;
      } else {
        chiper.push(message[i])
      }
    }
    if (!this.straight) {
      return chiper.reverse().join('');
    } else {
      return chiper.join('');
    }
  }
}