/*
 * @file: main.js
 * @author: Andy Ren (a.k.a @terraglacium)
 * @license: apache 2.0
 * @version: 0.9.2
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

const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;

//let userInput = "";
let polyArray = [];
//let polyString = "";
//let secondPolyString = "";
//let secondPoly = [];
//let polynomialArray = [];

//input here -->

console.log("Welcome to polynomial.js!");
console.log("Please first input a polynomial using 'poly'");
console.log("Polynomial Format: ax^n+...+C");

readlineSync.promptCLLoop({
  poly: function(polyString) {
    polyArray = polyObjectGenerator(polyString);
  },
  printOut: function() {
    printOut(polyArray);
  },
  degree: function() {
    console.log(`The degree of the polynomial is: ${degree(polyArray)}`);
  },
  evaluate: function(x) {
    console.log(`When x = ${x}, f(x) = ${evaluate(polyArray, x)}`);
  },
  addition: function(secondPolyString) {
    let secondPoly = polyObjectGenerator(secondPolyString);
    polyArray = addition(polyArray, secondPoly);
  },
  subtraction: function(secondPolyString) {
    let secondPoly = polyObjectGenerator(secondPolyString);
    polyArray = subtraction(polyArray, secondPoly);
  },
  multiply: function(secondPolyString) {
    let secondPoly = polyObjectGenerator(secondPolyString);
    polyArray = multiply(polyArray, secondPoly);
  },
  divide: function() {
    console.log("WIP currently");
  },
  derivative: function() {
    polyArray = derivative(polyArray);
  },
  integral: function() {
    polyArray = integral(polyArray);
  },
  help : function(){},
  exit: function() { return true; }

},{prompt : "input :>", limitMessage: "Error: illegal command",});

console.log("Exiting polynomial.js...");
setTimeout( function(){
    console.log('Complete!')
},3000);
