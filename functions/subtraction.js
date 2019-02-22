"use strict";

const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");
const regex = /[+-]?\d+x\^\d+|[+-\s]\d+/g;

function subtraction(polyArray){
  //let userInput = prompt("Input a function to be added", "1x^1+1");
  let userInput = "-4x^3+6x^2+2x^1+3x^7+8x^8-888";
  let userInput2 = "1x^2+1";
  let subtractedPoly = [];
  subtractedPoly = arrayGenerator(userInput.match(regex));
  subtractedPoly = insertMissing(addedPoly);

  /*
   * three Conditions for how to subtract polynomials:
   * when subtractedPoly.length < polyarray.length
   * when subtractedPoly.length === polyarray.length
   * when subtractedPoly.length > polyarray.length
  */

  if(subtractedPoly.length < polyArray.length) {
    for(let i = 0; i < polyArray.length; ++i) {
      for(let j = 0; j < subtractedPoly.length; ++j){
        if(polyArray[i].power === subtractedPoly.power) {
          polyArray[i].coefficient -= subtractedPoly.coefficient;
        }
      }
    }
    return polyArray;
  } else if (subtractedPoly.length === polyArray.length) {
    for(let i = 0; i < polyArray.length; ++i) {
      polyArray[i].coefficient -= subtractedPoly[i].coefficient;
    }
    // removing 0 objects?
    return polyArray;
  } else {
    for(let i = 0; i < subtractedPoly.length; ++i){
      for(let j = 0; i < polyArray[i].length; ++j){
        if(polyArray[j].power === subtractedPoly[i].power) {
          subtractedPoly[i].coefficient = polyArray[i].coefficient - subtractedPoly[i].coefficient;
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
