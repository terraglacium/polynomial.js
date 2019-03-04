"use strict";

const polyEmptyCheck = require("./polyEmptyCheck.js");

// using "export" for browser
// cors req using ^
// browserify for node?
/*export*/

/*
 * Degree function:
 * @param: polyArray
 * Takes in a polyArray
 * Returns leading term power
*/

function degree(polyArray) {
    if(polyEmptyCheck(polyArray)) return;
    //console.log(polyArray);
    //console.log(`The degree of this polynomial is ${polyArray[0].power}`);
    return polyArray[0].power;
}

module.exports = degree;
