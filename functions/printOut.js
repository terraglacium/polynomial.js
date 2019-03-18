"use strict";

const polyEmptyCheck = require("./polyEmptyCheck.js");
const stringGenerator = require("./stringGenerator.js");

/*
 * printOut function:
 * @param = polyArray
 * Prints out the string of polyArray
 */

function printOut(polyArray) {
    //console.log(polyArray);
    if(polyEmptyCheck(polyArray)) return;

    let string = stringGenerator(polyArray);
    console.log(string);
    
    //return string; 
}

module.exports = printOut;
