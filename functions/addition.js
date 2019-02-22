"use strict";

const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");
const regex = /[+-]?\d+x\^\d+|[+-\s]\d+/g;

function addition(polyArray) {
    //let userInput = prompt("Input a function to be added", "1x^1+1");
  let userInput = "-4x^3+6x^2+2x^1+3x^7+8x^8-888";
  let userInput2 = "1x^2+1";
  let addedPoly = [];
  addedPoly = arrayGenerator(userInput.match(regex));
  addedPoly = insertMissing(addedPoly);

  /*
   * three Conditions for how to add polynomials:
   * when addedPoly.length < polyarray.length (if)
   * when addedPoly.length === polyarray.length (else if)
   * when addedPoly.length > polyarray.length (else)
   * remind user to put 0x^power when writing out an eq
   * ^ not required since insertMissing() implemented
   */

   //console.log(polyArray.length);
   console.log(addedPoly.length);
  if(addedPoly.length < polyArray.length) {
    //for loop iterating through array
    for(let i = 0; i < polyArray.length ; ++i) {
      //console.log(polyArray[i].power);
      //console.log(addedPoly.length);
      // find the matching power if largest degree vary
      for (let j = 0 ; j < addedPoly.length; ++j) {
        //console.log(polyArray[i]);
        //console.log(j);
        //console.log(addedPoly[j]);
        // only add the two coefficients if their powers match
        if(polyArray[i].power === addedPoly[j].power){
          polyArray[i].coefficient += addedPoly[j].coefficient;
        }
      }
    }
    console.log(polyArray);
    return polyArray;
  } else if (addedPoly.length === polyArray.length) {
    for(let i = 0; i < addedPoly.length; ++i) {
      console.log(polyArray[i].power);
        polyArray[i].coefficient += addedPoly[i].coefficient;
    }
    console.log(polyArray);
    return polyArray;
  } else {
    //for loop iterating through array
    for(let i = 0; i < addedPoly.length ; ++i) {
      //console.log(addedPoly[i].power);
      //console.log(polyArray.length);
      // find the matching power if largest degree vary
      for (let j = 0 ; j < polyArray.length; ++j) {
        //console.log(addedPoly[i]);
        //console.log(j);
        //console.log(polyArray[j]);
        // only add the two coefficients if their powers match
        if(polyArray[j].power === addedPoly[i].power){
          addedPoly[i].coefficient += polyArray[j].coefficient;
        }
      }
    }
    console.log(addedPoly);
    return addedPoly;
  }

}

module.exports = addition;
