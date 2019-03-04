"use strict";

const insertMissing = require("./insertMissing.js");
const polyEmptyCheck = require("./polyEmptyCheck.js");

/*
 * Integral function:
 * @param = polyArray
 * for loop cycles through array
 * Integral for polynomials: k/(n+1)*(x^n+1)
 * Set coefficient of term = orig coeff * (1/(array power+1))
 * Set term power = ++power
 * Return polyArray
 * @bug: breaks after taking derivative of a constant or power: 0
*/

function integral(polyArray) {
  if(polyEmptyCheck(polyArray)) return;

  for(let i = 0; i < polyArray.length; ++i) {
    polyArray[i].coefficient = polyArray[i].coefficient * (1/(polyArray[i].power + 1));
    ++polyArray[i].power;
  }
  polyArray = insertMissing(polyArray);
  return polyArray;

}

module.exports = integral;
