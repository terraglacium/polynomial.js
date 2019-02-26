"use strict";


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
    if(polyArray[i].coefficient === 0) {
      --polyArray.length;
      continue;
    }

    monomial[i] = polyArray[i].coefficient + "x" + "^" + polyArray[i].power;

    if(polyArray[i].power === 0) {
      monomial[i] = `${polyArray[i].coefficient}`;
    }

  }

  let polyString = monomial.join('~');
  polyString = polyString.replace(/[\s\uFEFF\xA0]|[~]+/g,"+");

  for(let j = 0; j < polyString.length ; ++j) {
    if(polyString[j] === "-") {
      let tempString1 = polyString.substring(0, j-1) ;
      let tempString2 = polyString.substring(j, polyString.length);
      polyString = tempString1 + tempString2;
    }
  }

  return polyString;

}

module.exports = stringGenerator;
