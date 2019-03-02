const arrayGenerator = require("./arrayGenerator.js");
const insertMissing = require("./insertMissing.js");

const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;

/*
 * Polynomial Object Generator function:
 * @param = string
 * Takes in a string, and calls arrayGenerator and insertMissing
 * arrayGenerator creates an array of objects with polynomial properties
 * insertMissing adds missing terms that are zeroes
 * Returns polyArray
 */

function polyObjectGenerator(string) {
  let polyArray = [];
  try { 
    polyArray = arrayGenerator(string.match(regex));
    polyArray = insertMissing(polyArray);

  } catch(error) {
    //console.log(error);
    console.log("Error: Please input a polynomial");
  }

  return polyArray;
}

module.exports = polyObjectGenerator;
