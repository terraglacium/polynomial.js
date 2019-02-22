"use strict";

/* inserts missing entries for consistency
 * checks if power for each monomial object exist,
 * if so, then equal passed array element as element
 * of insertedPolyArray
 * if not, create a new object entry for insertedPolyArray
*/

function insertMissing(polynomial) {
  let insertedPolyArray = [];
  let power = polynomial[0].power;

  for (let i = 0; i <= power; ++i) {
    let powerExists = polynomial.find(function(monomial) {
      return monomial.power === power - i;
    });
    if (powerExists) {
      insertedPolyArray[i] = polynomial.shift();
    } else {
      insertedPolyArray[i] = { coefficient: 0, power: power - i };
    }
  }
  return insertedPolyArray;
}

module.exports = insertMissing;
