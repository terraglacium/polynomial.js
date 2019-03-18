"use strict";

/*
 * arrayGenerator function:
 * @param: String.match(regex) -> polynomial
 * Takes in an .match(regex) array
 * forEach(monomial) breaks down each entry of the "polynomial" param
 * array into an array of objects containing props "coefficient" and "power"
 * Coefficient ternary operator checks if certain props have 1x represented as x 
 * Power ternary operator checks if there is a ^n power and if it is an "x" monomial, or a real number
 * PolynomialProps is an array with the monomial split
 * Sort the array in descending order
 * Check if there are duplicate entries in the polynomial, and adds them into one entry
 * Return the array
*/

function arrayGenerator(polynomial) {
  let localPolyArray = [];
  polynomial.forEach((monomial) => {
    let polynomialProps = monomial.split('^');
    localPolyArray.push({
      coefficient: polynomialProps[0][0] == "x" 
                    ? 1 
                    : polynomialProps[0][0] == "+" 
                      ? (polynomialProps[0].includes("+x") 
                        ? 1 
                        : parseFloat(polynomialProps[0]))
                      : polynomialProps[0][0] == "-" 
                        ? (polynomialProps[0].includes("-x") 
                          ? -1 
                          : parseFloat(polynomialProps[0])) 
                        : polynomialProps[0][0] == null 
                          ? 1
                          : parseFloat(polynomialProps[0]),
      power: polynomialProps[1] != null 
              ? parseInt(polynomialProps[1]) 
              : (polynomialProps[0].includes("x") ? 1 : 0)
    });

  });
  //console.log(localPolyArray);
  // Sort algorithm for an array in descending order
  localPolyArray.sort((monomial1, monomial2) => {
    return monomial2.power - monomial1.power
  });

  let sumArray = [];

  localPolyArray.forEach(function (polyProp) {
    //let existProp = sumArray.filter((sumProp) => { 
    //return sumProp.power === polyProp.power; 
    //})[0]; //existProp is the first unique entry from filter array (that returned true)

    let existProp = sumArray.find((sumProp) => {
      return sumProp.power === polyProp.power;
    });

    if (!existProp) { // if no filter object exists yet, add it
      sumArray.push(polyProp);
    } else { // else add to the unique filter entry 
      existProp.coefficient += polyProp.coefficient;
    }
  });

  localPolyArray = sumArray; 
  return localPolyArray;
}

module.exports = arrayGenerator;
