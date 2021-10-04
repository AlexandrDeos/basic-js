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
 export default function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var sum = 0;
  var first = s1.split('');
  var two = s2.split('');
  first.map(el =>{
    if(two.includes(el)){
      sum+=1;
      two.splice(two.indexOf(el), 1);
    }return null;
  })
  return sum;
}