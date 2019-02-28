"use strict";

const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");
const removeZeroes = require("./removeZeroes.js");
const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;

/*
 * Multiplication function:
 * @param: polyArray, multipliedPoly
 * Takes in another array within the function to be multiplied
 * Creates an additional result array
 * The two arrays are passed into a conditional block:
 * Three conditions used for multiplying polynomials:
 * 1. When multipliedPoly.length < polyarray.length or multipliedPoly.length > polyarray.length
 * 2. When multipliedPoly.length === polyarray.length
 * Terms with the same power will be combined
 * Returns result
 */

function multiply(polyArray, multipliedPoly) {
  /*let userInput = "1x^1+2";
  let multipliedPoly = [];
  multipliedPoly = arrayGenerator(userInput.match(regex));
  multipliedPoly = insertMissing(multipliedPoly);
  */

  let result = [];

  if(multipliedPoly.length < polyArray.length || multipliedPoly.length > polyArray.length ) {
    // set/(allocate space to) the result polynomial to store objects with a length as the polynomials multiplied -1
    // the total sum - 1 is the total number of terms in the result polynomial
    // since .length is power + 1, then .length + .length is power + 2, or .length + 1
    for(let k = 0; k < (polyArray.length + multipliedPoly.length)-1; ++k) {
      result[k] = {coefficient: 0, power: 0};
    }
    // for loop iterating through param array
    for(let i = 0; i < polyArray.length ; ++i) {
      // for loop iterating through multiplied array
      for(let j = 0; j < multipliedPoly.length; ++j) {
        // position i+j of the result array, aka one of the terms that multiplying creates
        // keeping result[i+j].coefficient is to sum all the terms with the same power at their proper position
        // if statement is probably extraneous, since the summation just overrides the same power
        result[i+j].coefficient = result[i+j].coefficient + polyArray[i].coefficient * multipliedPoly[j].coefficient;
        if (result[i+j].power != (polyArray[i].power + multipliedPoly[j].power)) {
          result[i+j].power = polyArray[i].power + multipliedPoly[j].power;
        }
      }
    }
    /*if(result[result.length-1].power === result[result.length-2].power) {
      result.pop();
    }*/
    //return result;

  } else if (multipliedPoly.length === polyArray.length) {
    // iterate through to store objects in result array
    // sum -1 is total number of terms in result
    // since .length is power + 1, then .length + .length is power + 2, or .length + 1
    for(let k = 0; k < (polyArray.length + multipliedPoly.length)-1; ++k) {
      result[k] = {coefficient: 0, power: 0};
    }
    // for loop iterating through param array
    for(let i = 0; i < polyArray.length; ++i) {
      // for loop iterating through multiplied array
      for(let j = 0; j < multipliedPoly.length; ++j) {
        // position i+j of the result array, aka one of the terms that multiplying creates
        // keeping result[i+j].coefficient is to sum all the terms with the same power at their proper position
        result[i+j].coefficient = result[i+j].coefficient + polyArray[i].coefficient * multipliedPoly[j].coefficient;
        result[i+j].power = polyArray[i].power + multipliedPoly[j].power;
      }
    }

  } /*else {
    // iterate through to store objects in result array
    // sum -1 is total number of terms in result
    // since .length is power + 1, then .length + .length is power + 2, or .length + 1
    for(let k = 0; k < (polyArray.length + multipliedPoly.length)-1; ++k) {
      result[k] = {coefficient: 0, power: 0};
    }
    // for loop iterating through multiplied array
    for(let i = 0; i < multipliedPoly.length; ++i) {
      // for loop iterating through param array
      for(let j = 0; j < polyArray.length; ++j) {
        // position i+j of the result array, aka one of the terms that multiplying creates
        // keeping result[i+j].coefficient is to sum all the terms with the same power at their proper position
        result[i+j].coefficient = result[i+j].coefficient + multipliedPoly[i].coefficient * polyArray[j].coefficient;
        result[i+j].power = multipliedPoly[i].power + polyArray[j].power ;
      }
    }
  } */

  return result;
}

 module.exports = multiply;
