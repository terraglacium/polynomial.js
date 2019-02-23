"use strict";

const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");
const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;

/*
 * Subtraction function:
 * @param = polyArray
 * Takes in another array within the function to be subtracted from
 * The two arrays are passed into a conditional block:
 * Three conditions used for subtracting polynomials:
 * 1. When subtractedPoly.length < polyarray.length
 * 2. When subtractedPoly.length === polyarray.length
 * 3. When subtractedPoly.length > polyarray.length
*/

function subtraction(polyArray){
  //let userInput = prompt("Input a function to be added", "1x^1+1");
  let userInput = "1";
  let userInput1 = "-4x^3+6x^2+2x^1+3x^7+8x^8-888";
  let userInput2 = "1x^2+1";
  let subtractedPoly = [];
  subtractedPoly = arrayGenerator(userInput.match(regex));
  subtractedPoly = insertMissing(subtractedPoly);

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
    return polyArray;
  } else if (subtractedPoly.length === polyArray.length) {
    // for loop iterating through param array
    for(let i = 0; i < polyArray.length; ++i) {
      polyArray[i].coefficient -= subtractedPoly[i].coefficient;
    }
    // removing 0 objects?
    return polyArray;
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
    // removing 0 objects?
    return subtractedPoly;
  }

}

module.exports = subtraction;
