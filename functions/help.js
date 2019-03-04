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
    case "arraygenerator":
      console.log("Function is d e p r e c a t e d.");
      console.log("Creates an array of objects with polynomial props.");
      console.log("Usage: 'arrayGenerator [polyString]' \n");
      break;
    case "insertmissing":
      console.log("Function is d e p r e c a t e d.");
      console.log("Inserts missing zero terms in between nonzero terms.");
      console.log("Usage: 'insertMissing [polyArray]' \n");
      break;
    case "removezeroes":
      console.log("Function is d e p r e c a t e d.");
      console.log("Removes any excessive leading zeroes.");
      console.log("Usage: 'removeZeroes [polyArray]' \n");
      break;
    case "poly":
      console.log("Generates a polyArray based on polynomial string inputted.");
      console.log("Usage: 'poly [polynomial]' \n");
      break;
    case "printout":
      console.log("Prints out stored polynomial in memory.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'printOut' \n");
      break;
    case "degree":
      console.log("Returns the degree of the polynomial as saved in memory.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'degree' \n");
      break;
    case "evaluate":
      console.log("Calculates the value of polynomial function f(x) at given x value.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'evaluate [x]' \n");
      break;
    case "stringgenerator":
      console.log("Function is d e p r e c a t e d.");
      console.log("Converts polyArray back to a polyString.");
      console.log("Usage: 'stringGenerator polyArray' \n");
      break;
    case "addition":
      console.log("Adds two polynomials together.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'addition [second polynomial]' \n");
      break;
    case "subtraction":
      console.log("Subtracts a polynomial from another.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'subtraction [second polynomial]'' \n");
      break;
    case "multiply":
      console.log("Multiplies two polynomials together.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'multiply [second polynomial]' \n");
      break;
    case "divide":
      console.log("Divides two polynomials using long division.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'divide [second polynomial]' \n");
    break;
    case "derivative":
      console.log("Calculates the derivative of a polynomial.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'derivative' \n");
      break;
    case "integral":
      console.log("Calculates the integral of a polynomial.");
      console.log("A polynomial must be inputted before this function works.");
      console.log("Usage: 'integral' \n");
      break;
    case "~":
      console.log("Usage: help [command] \n");
      console.log("Functions and their corresponding help command: \n");
      console.log("poly: 'help poly'");
      console.log("printOut: 'help printout'");
      console.log("degree: 'help degree'");
      console.log("evaluate: 'help evaluate'");
      console.log("addition: 'help addition'");
      console.log("subtraction: 'help subtraction'");
      console.log("multiply: 'help multiply'");
      console.log("divide: 'help divide'");
      console.log("derivative: 'help derivative'");
      console.log("integral: 'help integral'");
      console.log("help: 'help ~' \n");
      break;
    default:
      console.log("Please input a valid command: \n");

      console.log("Usage: help [command] \n");
      console.log("Functions and their corresponding help command: \n");
      console.log("poly: 'help poly'");
      console.log("printOut: 'help printout'");
      console.log("degree: 'help degree'");
      console.log("evaluate: 'help evaluate'");
      console.log("addition: 'help addition'");
      console.log("subtraction: 'help subtraction'");
      console.log("multiply: 'help multiply'");
      console.log("divide: 'help divide'");
      console.log("derivative: 'help derivative'");
      console.log("integral: 'help integral'");
      console.log("help: 'help ~' \n");
      break;
  }

}

module.exports = help;
