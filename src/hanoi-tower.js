import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

export default function calculateHanoi( disksNumber, turnsSpeed ) {

  
  let t1 = (2**disksNumber)-1

  
  let seconds1 = Math.floor((3600/turnsSpeed)*t1)
  //Math.floor(seconds)
  let obj = { turns: t1, seconds: seconds1}
  return obj//.turns, obj.seconds

}
