"use strict";

const polyEmptyCheck = require("./polyEmptyCheck.js");

/*
 * Derivative function:
 * @param = polyArray
 * for loop cycles through array
 * Derivatives for polynomials == nx^n-1
 * Set coefficient of array = orig coeff * array power
 * Set array power - 1
 * Pop last element as it becomes extra 0th degree
 * Check if constant being differentiated, add 0 term if so
 * Return polyArray
*/

function derivative(polyArray) {
  if(polyEmptyCheck(polyArray)) return;

  for (let i = 0; i < polyArray.length; ++i) {
    polyArray[i].coefficient *= polyArray[i].power;
    polyArray[i].power -= 1;
    // --polyArray[i].power?
  }
  //pop last element since it is now an extra 0th degree term (?)
  polyArray.pop();

  if(polyArray.length < 1) { 
    polyArray.unshift({coefficient: 0, power: 0});
  }
  return polyArray;
}

module.exports = derivative;
