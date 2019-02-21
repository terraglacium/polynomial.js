"use strict";

const arrayGenerator = require("../main.js");
// using "export" for browser
// cors req using ^
// browserify for node?
/*export*/

const regex = /[+-]?\d+x\^\d+|[+-\s]\d+/g;
function addition(polyArray) {
    console.log(array);

    //let userInput = prompt("Input a function to be added", "1x^1+1");
    let userInput = "1x^1+1";
    let addedPoly = [];
    addedPoly = arrayGenerator(userInput.match(regex));

    /*
     * Three Conditions for poly length:
     * when addedPoly < polyarray
     * when addedPoly == polyarray
     * when addedPoly > polyarray
     * remind user to put 0x^power when writing out an eq
    */

    if(addedPoly.length < polyArray.length) {
        //for loop iterating through array
        for(let i = 0; i < polyArray.length; ++i) {
          // find the matching power if largest degree vary
          for (let j = 0 ; j < addedPoly.length; ++i) {
            // only add the two coefficients if their powers match
            if(polyArray[i].power === addedPoly[j].power){
                polyArray[i].coefficient += addedPoly[j].coefficient;
            }
          }
        }
    } else if (addedPoly.length === polyArray.length) {

    } else {

    }

}

module.exports = addition;
