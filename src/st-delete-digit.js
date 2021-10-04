import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit( n ) {
  let arr=[];
  let nStr = n.toString();
for(let i=0; i< nStr.length; i++){
  arr.push(nStr.slice(0, i) + nStr.slice(i + 1))
}
return Math.max(...arr)
}