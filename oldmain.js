"use strict";

//mathjs
//reactjs
//fractionsjs
//match() - regular exp

let userInput = prompt("Input a function", "x");
let polynomialArray = [];

arrayParser(userInput);

function arrayParser(input) {

    polynomialArray = input.toLowerCase().split(/ +/); //turns string into array
    console.log(polynomialArray);

    // filters out +
    let monomialArray = polynomialArray.filter( (string) => string != "+");
    console.log(monomialArray);

    for(let i = 0; i < monomialArray.length; ++i) {
      //console.log("nice");
      monomialArray[i];
    }

    // filters out x
    let coefficientArray = monomialArray.filter( (monomial) => monomial != "x");
    console.log(coefficientArray);

    for(let i = 0; i < coefficientArray.length; ++i) {
      //console.log("nice");
      if(Boolean(coefficientArray[i])) {
        console.log("nice");
      }
    }

    //filter out +
    //parse for degree
    //take coefficient
}

/*
* Functions to be written
* add
*
*
*
*
*
*/
