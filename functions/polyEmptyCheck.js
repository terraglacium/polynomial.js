"use strict";

/*
 * polyEmptyCheck function:
 * @param: polyArray
 * Checks if polyArray is empty
 * If true, return true
 * If false, return false
*/


function polyEmptyCheck(polyArray) {
  if(polyArray.length < 1 || polyArray == undefined){
    console.log("Please input a polynomial using 'poly [polynomial]' first");
    return true;
  }
  return false;

}

module.exports = polyEmptyCheck;
