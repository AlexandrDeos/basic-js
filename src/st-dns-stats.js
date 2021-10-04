import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 export default function getDNSStats( domains ) {
  let ans ={};
  let array =[];
  /* let res= ""; */
  for (let i = 0; i < domains.length; i++) {
         array = domains[i].split(".").reverse();
         let res= "";
for (let j = 0; j < array.length; j++){
  
  res += "." + array[j];
  if (!ans[res]) {
    ans[res] = 1;
  } else {
    ans[res] += 1;
  }
} 
  }
  return ans;
}