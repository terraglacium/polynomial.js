/*
 * @file: testMain.js
 * @author: Andy Ren (a.k.a @terraglacium)
 * @license: apache 2.0
 * @comment: use -4x^3+6x^2+2x^1+3x^7+8x^8-888 as test!
 */

"use strict";
// const fs = require('fs');
// ^ for readfilesync
const polyObjectGenerator = require("./functions/polyObjectGenerator.js");
const printOut = require("./functions/printOut.js");
const degree = require("./functions/degree.js");
const stringGenerator = require("./functions/stringGenerator.js");
const addition = require("./functions/addition.js");
const subtraction = require("./functions/subtraction.js");
const multiply = require("./functions/multiply.js");
const derivative = require("./functions/derivative.js");
const evaluate = require("./functions/evaluate.js");
//import { printOut } from './functions/printOut.js';
const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;
/* new regex /[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]|\d+/g
 * prev regex /[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]/g
 * excessive regex /[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]|[+-]x\^\d|[+-]?x/g
 * original regex /[+-]?\d+x\^\d+|[+-\s]\d[+-\s]/g
 */

//let userInput = prompt("Input a function", "1x^1+1");
let userInput = "1x^2+1";
let polynomialArray = [];

/*
 * Function arrayGenerator:
 * Takes in an .match(regex) array
 * forEach(monomial) breaks down each entry of the "polynomial" param
 * array into an array of objects containing props "coefficient" and "power"
 * PolynomialProps is an array with the monomial split
*/
function arrayGenerator(polynomial) {
  let localPolyArray = [];
  polynomial.forEach((monomial) => {
    let polynomialProps = monomial.split('^');
    localPolyArray.push({
      coefficient: parseFloat(polynomialProps[0]),
      power: polynomialProps[1] != null ? parseInt(polynomialProps[1]) : 0
    });
  });
  //console.log(localPolyArray);
  // Sort algorithm for an array in descending order
  localPolyArray.sort((monomial1, monomial2) => {
    return monomial2.power - monomial1.power
  });
  return localPolyArray;
}

console.log(userInput.match(regex))
//console.log(arrayGenerator(userInput.match(regex)));

/* polynomialArray is equal to the arrayGenerator
 * with a regex matching userInput for [+/-][number]x^[number]
*/
polynomialArray = arrayGenerator(userInput.match(regex));
console.log(polynomialArray);

//console.log(arrayGenerator("2x^1+123".match(regex)));

/* inserts missing entries for consistency
 * checks if power for each monomial object exist,
 * if so, then equal passed array element as element
 * of insertedPolyArray
 * if not, create a new object entry for insertedPolyArray
*/
function insertMissing(polynomial) {
  let insertedPolyArray = [];
  let power = polynomial[0].power;

  for (let i = 0; i <= power; ++i) {
    let powerExists = polynomial.find(function(monomial) {
      return monomial.power === power - i;
    });

    if (powerExists) {
      insertedPolyArray[i] = polynomial.shift();
    } else {
      insertedPolyArray[i] = { coefficient: 0, power: power - i };
    }
  }
  return insertedPolyArray;
}


/*
 * ---> run functions past this point
 * this is because the functions are optimized to work with insertMissing
 */
//insertMissing(polynomialArray);
polynomialArray = insertMissing(polynomialArray);
console.log(polynomialArray);

polynomialArray = subtraction(polynomialArray);
console.log(polynomialArray);

let testDer = derivative(insertMissing(arrayGenerator("1x^2".match(regex))));
console.log(testDer);

//fetches command from user
/*if (prompt) {

} else if() {

} else if() {

} else if() {

}*/

//printOut(userInput);
// ^ requires node js

/* Sort algorithm for an array in descending order
polynomialArray.sort((monomial1, monomial2) => {
  return monomial2.power - monomial1.power
});

console.log(polynomialArray);
*/

  /*
  * Functions to be written
  * arrayInput
  * arrayGenerator - done
  * insertMissing - done
  * removeZeroes - done
  * printOut - done
  * degree - done
  * evaluate - done
  * stringGenerator - add descriptions and test for edge cases
  * factor
  * addition - done
  * subtraction from orig poly - done
  * division (synthetic)
  * division (long division)
  * derivative (to the first derivative) - done
  * integral - done
  */

  // note: always assign old array to new result
  // note, replace addition, subtraction, multiply, division functions
  // with two params
  // clean up all this spaghet
