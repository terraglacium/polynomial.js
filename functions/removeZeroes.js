"use strict";

/*
 * Zero leading term removal function:
 * @param: polyArray
 * Recursive function
 * 1. Base case (if) checks if array has a leading term
 * with a 0 coefficient, and that the array only has 2 terms
 * It then shifts the leading term and returns the remaining array
 * 2. Else, it checks two conditions:
 * if the leading term coeff == 0, shift it out and recursively continue to check next term
 * else, this means that the leading term coeff != 0, so return array
 * Return polyArray if base case reached or no 0 leading terms left
*/

function removeZeroes(polyArray) {
  if(polyArray[0].coefficient == 0 && polyArray.length == 2) {
    polyArray.shift();
    return polyArray;
  } else {
    if(polyArray[0].coefficient == 0) {
      polyArray.shift();
      return removeZeroes(polyArray);
    } else {
      return polyArray;
    }
  }
}

module.exports = removeZeroes;
