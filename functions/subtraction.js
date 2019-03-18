"use strict";

const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");
const removeZeroes = require("./removeZeroes.js");
const polyEmptyCheck = require("./polyEmptyCheck.js");
const regex = /[+-]?\d*x\^\d+|[+-]?\d*x|[+-\s]?\d+/g;

/*
 * Subtraction function:
 * @param: polyArray, subtractedPoly
 * Takes in another array within the function to be subtracted from
 * The two arrays are passed into a conditional block:
 * Three conditions used for subtracting polynomials:
 * 1. When subtractedPoly.length < polyArray.length (if)
 * 2. When subtractedPoly.length === polyArray.length (else if)
 * 3. When subtractedPoly.length > polyArray.length (else)
 * Returns polyArray
*/

function subtraction(polyArray, subtractedPoly){
  if(polyEmptyCheck(polyArray)) return;
  
  if(subtractedPoly.length < polyArray.length) {
    // for loop iterating through param array
    for(let i = 0; i < polyArray.length; ++i) {
      // for loop iterating over subtracted array
      // find matching power if degrees vary
      for(let j = 0; j < subtractedPoly.length; ++j) {
        // only subtract the two coefficients if their powers match
        if(polyArray[i].power === subtractedPoly[j].power) {
          polyArray[i].coefficient -= subtractedPoly[j].coefficient;
        }
      }
    }
    //return polyArray;
  } else if (subtractedPoly.length === polyArray.length) {
    // for loop iterating through param array
    for(let i = 0; i < polyArray.length; ++i) {
      polyArray[i].coefficient -= subtractedPoly[i].coefficient;
    }
    //return polyArray;
  } else {
    // for loop iterating through subtracted array
    for(let i = 0; i < subtractedPoly.length; ++i){
      // for loop iterating over param array
      // find matching power if degrees vary
      for(let j = 0; j < polyArray.length; ++j){
        // only subtract the two coefficients if their powers match
        // else is to modulate 0x^n aka 0 - subtractedPoly[i]
        if(polyArray[j].power === subtractedPoly[i].power) {
          subtractedPoly[i].coefficient = polyArray[j].coefficient - subtractedPoly[i].coefficient;
        } else {
          subtractedPoly[i].coefficient = -subtractedPoly[i].coefficient;
        }
      }
    }
    polyArray = subtractedPoly;
    //return subtractedPoly;
  }
  polyArray = removeZeroes(polyArray);
  return polyArray;

}

module.exports = subtraction;
