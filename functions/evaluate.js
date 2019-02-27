"use strict";

/*
 * Evaluate function:
 * @param: polyArray, number
 * Takes in a polyArray, and a number to be evaluated
 * The two arrays are passed into a conditional block:
 * for loop iterates through each term, and adds to sum variable
 * Returns sum 
*/

function evaluate(polyArray, number) {
  let sum = null;
  for(let i = 0 ; i < polyArray.length; ++i) {
    sum = sum + polyArray[i].coefficient * (number ** polyArray[i].power);
  }
  return sum;
}

module.exports = evaluate;
