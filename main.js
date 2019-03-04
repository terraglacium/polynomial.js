/*
 * @file: main.js
 * @author: Andy Ren (a.k.a @terraglacium)
 * @license: apache 2.0
 * @version: 0.9.6
 * @comment: 1. divide is currently broken, 2. run using npm start
 */

"use strict";

const readlineSync = require("readline-sync");

const arrayGenerator = require("./functions/arrayGenerator.js");
const insertMissing = require("./functions/insertMissing.js");
const removeZeroes = require("./functions/removeZeroes.js");
const polyObjectGenerator = require("./functions/polyObjectGenerator.js");
const printOut = require("./functions/printOut.js");
const degree = require("./functions/degree.js");
const evaluate = require("./functions/evaluate.js");
const stringGenerator = require("./functions/stringGenerator.js");
const addition = require("./functions/addition.js");
const subtraction = require("./functions/subtraction.js");
const multiply = require("./functions/multiply.js");
const derivative = require("./functions/derivative.js");
const integral = require("./functions/integral.js");
const help = require("./functions/help.js");
const polyEmptyCheck = require("./functions/polyEmptyCheck.js");

const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;

//let userInput = "";
let polyArray = [];
//let polyString = "";
//let secondPolyString = "";
//let secondPoly = [];
//let polynomialArray = [];

//input here -->

console.log("Welcome to polynomial.js!");
console.log("Please first input a polynomial using 'poly'.");
console.log("Polynomial Format: 'ax^n+...+C'.");
console.log("If you need help, input 'help ~'");

readlineSync.promptCLLoop({
  poly: function(polyString) {
    polyArray = polyObjectGenerator(polyString);
  },
  printOut: function() {
    printOut(polyArray);
  },
  degree: function() {
    if(!polyEmptyCheck(polyArray)) {
      console.log(`The degree of the polynomial is: ${degree(polyArray)}. \n`);
    }
  },
  evaluate: function(x) {
    if(!polyEmptyCheck(polyArray)) {
      console.log(`When x = ${x}, f(x) = ${evaluate(polyArray, x)}. \n`);
    }
  },
  addition: function(secondPolyString) {
    let secondPoly = polyObjectGenerator(secondPolyString);
    if(secondPoly === false) {
      console.log("Usage: addition [second polynomial] \n");
      polyEmptyCheck(polyArray);
      return;
    }
    polyArray = addition(polyArray, secondPoly);
    printOut(polyArray);
  },
  subtraction: function(secondPolyString) {
    let secondPoly = polyObjectGenerator(secondPolyString);
    if(secondPoly === false) {
      console.log("Usage: subtraction [second polynomial] \n");
      polyEmptyCheck(polyArray);
      return;
    }
    polyArray = subtraction(polyArray, secondPoly);
    printOut(polyArray);
  },
  multiply: function(secondPolyString) {
    let secondPoly = polyObjectGenerator(secondPolyString);
    if(secondPoly === false) {
      console.log("Usage: multiply [second polynomial] \n");
      polyEmptyCheck(polyArray);
      return;
    }
    polyArray = multiply(polyArray, secondPoly);
    printOut(polyArray);
  },
  divide: function() {
    console.log("WIP currently.");
  },
  derivative: function() {
    polyArray = derivative(polyArray);
    if(!polyEmptyCheck) {
      printOut(polyArray);
    }
  },
  integral: function() {
    polyArray = integral(polyArray);
    if(!polyEmptyCheck) {
      printOut(polyArray);
    }
  },
  help : function(command){
    try {
      help(command.toLowerCase());
    } catch(error) {
      help(command);
    }
  },
  exit: function() { return true; }

},{prompt : "input :>", limitMessage: "@Error: Illegal command.",});

console.log("Exiting polynomial.js...");
setTimeout( function(){
    console.log('Complete!')
},3000);
