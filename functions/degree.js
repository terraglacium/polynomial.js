"use strict";

// using "export" for browser
// cors req using ^
// browserify for node?
/*export*/

function degree(polyArray) {
    //console.log(polyArray);
    //console.log(`The degree of this polynomial is ${polyArray[0].power}`);
    return polyArray[0].power;
}

module.exports = degree;
