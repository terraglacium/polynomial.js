"use strict";

/*
 * Derivative function:
 * for loop cycles through array
 * Derivatives for polynomials == nx^n-1
 * Set coefficient of array = orig coeff * array power
 * Set array power - 1
 * Pop last element as it becomes extra 0th degree
*/

function derivative(polyArray) {
  for (let i = 0; i < polyArray.length; ++i) {
    polyArray[i].coefficient *= polyArray[i].power;
    polyArray[i].power -= 1;
    // --polyArray[i].power?
  }
  //pop last element since it is now an extra 0th degree term (?)
  polyArray.pop();
  return polyArray;
}

module.exports = derivative;
