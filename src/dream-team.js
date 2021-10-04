import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(members) {
  if( !Array.isArray(members) ){
    return false
 }  else{
 let stack =[];
 
 for(let numb of members){
 
     if(typeof numb === "string" ){
 
       let arr = numb.trim().toUpperCase().split('')
       stack.push(arr[0])
       
     }
     }
 return (stack.sort().join(''))
 }
}