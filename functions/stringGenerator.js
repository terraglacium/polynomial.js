"use strict";

/*
 * stringGenerator function:
 * @param: polyArray
 * Takes in a polyArray
 * First for loop creates a array of monomials in the form of kx^n
 * .join joins the monomials by ~
 * .replace uses regex to replace all spaces and ~ with +
 * Last for loop checks if there are minus signs and removes the additional +
 * Returns polyString
*/

function stringGenerator(polyArray) {
  let monomial = [];

/*  polyArray.forEach((polyObject) => {
    if(polyObject.coefficient === 0) {
      continue;
    }
    monomial.push(polyObject.coefficient + "x" + "^" + polyObject.power);

    if(polyObject.power === 0) {
      monomial.pop();
      monomial.push = `${polyObject.coefficient}`;
    }

  }); */

  for(let i = 0; i < polyArray.length; ++i){
    //let counter = polyArray.length+1;
    // if coefficient of the monomimal === 0, skip the iteration
    if(polyArray[i].coefficient === 0) {
      //--counter;
      continue;
    }
    // creates a monomial in the array
    monomial[i] = polyArray[i].coefficient + "x" + "^" + polyArray[i].power;
    // if power === 0, monomial becomes simply the number
    if(polyArray[i].power === 0) {
      monomial[i] = `${polyArray[i].coefficient}`;
    }

  }

  // joins the monomial array by ~
  // note that empty entries are also considered, left empty by "continue"
  let polyString = monomial.join('~');
  // replace turns all the spaces and ~ into +
  polyString = polyString.replace(/[\s\uFEFF\xA0]|[~]+/g,"+");
  // for loop iterates through the string and checks for minus signs and removes the + if so
  for(let j = 0; j < polyString.length ; ++j) {
    if(polyString[j] === "-") {
      // break up strings before and after + and concatenates them ommitting the +
      let tempString1 = polyString.substring(0, j-1);
      let tempString2 = polyString.substring(j, polyString.length);
      polyString = tempString1 + tempString2;
    }
  }
  return polyString;

}

module.exports = stringGenerator;
