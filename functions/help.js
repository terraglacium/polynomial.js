"use strict";

/*
 * help function:
 * @param: command
 * Switch case that checks if command string inputted matches a command
 * Returns help syntax for specific command
 * Otherwise, default case is just listing all the commands of the program
*/

function help(command) {

  switch (command) {
    case "arrayGenerator":
      console.log("Function is d e p r e c a t e d");
      console.log("Creates an array of objects with polynomial props");
      console.log("Usage: arrayGenerator [polyString]");
      break;
    case "insertMissing":
      console.log("Function is d e p r e c a t e d");
      console.log("Inserts missing zero terms in between nonzero terms");
      console.log("Usage: insertMissing [polyArray]");
      break;
    case "removeZeroes":
      console.log("Function is d e p r e c a t e d");
      console.log("Removes any excessive leading zeroes");
      console.log("Usage: removeZeroes [polyArray]");
      break;
    case "poly":
      console.log("Generates a polyArray based on polynomial string inputted");
      console.log("Usage: poly [polynomial]");
      break;
    case "printOut":
      console.log("Prints out stored polynomial at the present state");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: printOut");
      break;
    case "degree":
      console.log("Returns the degree of the polyArray at present state");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: degree");
      break;
    case "evaluate":
      console.log("Calculates the value of polynomial function f(x) at given x value");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: evaluate [x]");
      break;
    case "stringGenerator":
      console.log("Function is d e p r e c a t e d");
      console.log("Converts polyArray back to a polyString");
      console.log("Usage: stringGenerator polyArray");
      break;
    case "addition":
      console.log("Adds two polynomials together");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: addition [second polynomial]");
      break;
    case "subtraction":
      console.log("Subtracts a polynomial from polyArray");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: subtraction [second polynomial]");
      break;
    case "multiply":
      console.log("Multiplies two polynomials together");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: multiply [second polynomial]");
      break;
    case "derivative":
      console.log("Calculates the derivative of a polynomial");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: derivative");
      break;
    case "integral":
      console.log("Calculates the integral of a polynomial");
      console.log("A polynomial must be inputted before this function works");
      console.log("Usage: integral");
      break;
    default:
      if(command !== "" || command !== "help" || command !== "h") {
        console.log("Please input a valid command:");
        console.log("");
      }

      console.log("Usage: help [command]");
      console.log("");
      console.log("Functions:");
      console.log("");
      console.log("poly: help poly");
      console.log("printOut: help printOut");
      console.log("degree: help degree");
      console.log("evaluate: help evaluate");
      console.log("addition: help addition");
      console.log("subtraction: help subtraction");
      console.log("multiply: help multiply");
      console.log("divide: help divide");
      console.log("derivative: help derivative");
      console.log("integral: help integral");
      console.log("help: help h ");
      break;
  }

}

module.exports = help;
