"use strict";

const stringGenerator = require("./stringGenerator.js");
/*
 * printOut function:
 * @param = polyArray
 * Prints out the string of polyArray
 */

function printOut(polyArray) {
    //console.log(polyArray);
    let string = stringGenerator(polyArray);
    console.log(string);
}

module.exports = printOut;
