"use strict";

const printOut = require("./functions/printOut.js");
//import { printOut } from './functions/printOut.js';

//let userInput = prompt("Input a function", "1x^1+1");
let userInput = "1x^1+1";
let polynomialArray = [];

function arrayGenerator(polynomial) {
    polynomial.forEach((monomial) => {
      let polynomialProps = monomial.split('^');
      polynomialArray.push({
          coefficient: parseFloat(polynomialProps[0]),
          power: polynomialProps[1] != null ? parseInt(polynomialProps[1]) : 0
      });
    });
    console.log(polynomialArray);
}

//pass in user input with a regex filter for [+/-][number]x^[number]
arrayGenerator(userInput.match(/[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]/g));

console.log(polynomialArray);

printOut(userInput);

//pass in user input with a regex filter for [+/-][number]x^[number]

// proto regex /[+-]?\d+x\^\d+|[+-\s]\d+[+-\s]|[+-]x\^\d|[+-]?x/g
// orig regex /[+-]?\d+x\^\d+|[+-\s]\d[+-\s]/g

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
