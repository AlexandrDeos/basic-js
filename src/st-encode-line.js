import { NotImplementedError } from '../extensions/index.js';

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
 export default function encodeLine( str ) {
  let array = str.split('');
  let res =1;
  for(let j = 0; j < array.length; j++){
    if(array[j] == array[j+1]){
      array.splice(j,1);
      res++;
      j--;
    } else{
      if(res > 1){
        array.splice(j, 0, res);
      }
      res = 1
    }
 

  }
  let ans = array.join('');
  return ans

}