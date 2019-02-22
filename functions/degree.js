"use strict";

// using "export" for browser
// cors req using ^
// browserify for node?
/*export*/

function degree(array) {
    console.log(array);
    console.log(`The degree of this polynomial is ${array[0].power}`);
}

module.exports = degree;
