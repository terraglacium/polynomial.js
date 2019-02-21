/*
 * @file main.js
 * @author Andy Ren (a.k.a @terraglacium)
 * @license apache
 */

"use strict";
// const fs = require('fs');
// ^ for readfilesync
//const printOut = require("./functions/printOut.js");
//import { printOut } from './functions/printOut.js';
const regex = /[+-]?\d+x\^\d+|[+-\s]\d+/g;
/* new regex /[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]|\d+/g
 * prev regex /[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]/g
 * excessive regex /[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]|[+-]x\^\d|[+-]?x/g
 * original regex /[+-]?\d+x\^\d+|[+-\s]\d[+-\s]/g
 */

let userInput = prompt("Input a function", "1x^1+1");
//let userInput = "1x^1+1";
let polynomialArray = [];

/*
 * Function arrayGenerator:
 * Takes in an .match(regex) array
 * forEach(monomial) breaks down each entry of the "polynomial" param
 * array into an array of objects containing props "coefficient" and "power"
 * polynomialProps is an array with the monomial split
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
// map() ^ ?

console.log(userInput.match(regex))
console.log(arrayGenerator(userInput.match(regex)));

/* polynomialArray is equal to the arrayGenerator
 * with a regex matching userInput for [+/-][number]x^[number]
*/
polynomialArray = arrayGenerator(userInput.match(regex));
console.log(polynomialArray);

console.log(arrayGenerator("2x^1+123".match(regex)));

// inserts missing entries for consistency
function insertMissing(polynomial) {
  let insertedPolyArray = [];

  polynomial.map((monomial) => {
    if(monomial.power)
  });
  for(let i = 0; i < polynomial.length; ++i) {
    let diff = polynomial[i].power - polynomial[i+1].power == 1;
    if ((diff) && polynomial[i+1]+diff == array[i+2]) {
      // must push to new array old array elements
      //insertedPolyArray =  polynomial.splice(i, 0, {coefficient: 0, power: polynomial[i].power-1});
    }
  }
  return insertedPolyArray;
  //return polynomial;
}

insertMissing(polynomialArray);
console.log(polynomialArray);

//printOut(userInput);
// ^ requires node js

/* Sort algorithm for an array in descending order
polynomialArray.sort((monomial1, monomial2) => {
  return monomial2.power - monomial1.power
});

console.log(polynomialArray);
*/

/* function(polynomialProps) {
  if(polynomialProps[1] != null) {
    return parseInt(PolynomialProps[1]);
  } else {
    return 0;
  } */


  /*
  * Functions to be written
  * printOut
  * degree
  * factor
  * add
  * subtract
  * multiply
  * division (synthetic)
  * division (long division)
  * derivative (to the first derivative)
  * integral
  */

  // module.exports = arrayGenerator;
  // for node.js
