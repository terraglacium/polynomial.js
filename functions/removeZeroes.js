"use strict";

/*
 * Zero leading term removal function:
 * @param: polyArray
 * Recursive function!
 * 1. Base case (if) checks if passed array has only 2 terms 
 * AND has a leading term with a 0 coefficient 
 * It then shifts the leading term and returns the remaining array
 * 2. Else, it checks two conditions:
 * If the array has more than 2 terms AND leading term coeff == 0, 
 * Shift the leading term out and recursively continue to check next term
 * Else, this means that the array length < 2 OR leading term coeff != 0 , so return array
 * Return polyArray if base case reached or array length less than 2 or no 0 leading terms left
*/

function removeZeroes(polyArray) {
  if(polyArray.length == 2 && polyArray[0].coefficient == 0) {
    polyArray.shift();
    return polyArray;
  } else {
    if(polyArray.length > 2 && polyArray[0].coefficient == 0) {
      polyArray.shift();
      return removeZeroes(polyArray);
    } else {
      return polyArray;
    }
  }
}

module.exports = removeZeroes;
