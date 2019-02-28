"use strict";

/*
 * arrayGenerator function:
 * @param: String.match(regex) -> polynomial
 * Takes in an .match(regex) array
 * forEach(monomial) breaks down each entry of the "polynomial" param
 * array into an array of objects containing props "coefficient" and "power"
 * PolynomialProps is an array with the monomial split
 * Sort the array in descending order
 * Return the array
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

module.exports = arrayGenerator;
