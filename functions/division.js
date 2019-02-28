"use strict";

function division(polyArray) {
  let userInput = "-4x^3+6x^2+2x^1+3x^7+8x^8-888";
  let userInput2 = "1x^2+1";
  let addedPoly = [];
  divisor = arrayGenerator(userInput.match(regex));
  divisor = insertMissing(divisor);

  if(divisor[0].power === 0 && divisor[0].coefficient === 0) {
    return NaN;
  }

  let quotient = 0;
  let remainder = polyArray;

  while((polyArray[0].power !== 0 && polyArray.coefficient !== 0)
        && degree(polyArray) >= degree(divisor)) {
    let temp = polyArray[0].coefficient / divisor[0].coefficient;
    quotient = quotient + temp;
    for(let i = 0; i < divisor.length; ++i) {
      divisor[i].coefficient = temp * divisor[i].coefficient;
    }
    remainder[remainder.length-1].coefficient = remainder[remainder.length-1].coefficient - divisor[divisor.length-1].coefficient;
  }

  return {quotient: quotient , remainder: remainder};

}
