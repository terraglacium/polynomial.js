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
  polyArray = arrayGenerator(string.match(regex));
  polyArray = insertMissing(polyArray);

  return polyArray;
}

module.exports = polyObjectGenerator;
