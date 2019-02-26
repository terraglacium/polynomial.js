/*
 * @file: main.js
 * @author: Andy Ren (a.k.a @terraglacium)
 * @license: apache 2.0
 * @comment: use -4x^3+6x^2+2x^1+3x^7+8x^8-888 as test!
 */

"use strict";

const arrayGenerator = require("./functions/arrayGenerator.js");
const insertMissing = require("./functions/insertMissing.js");
const removeZeroes = require("./functions/removeZeroes.js");
const printOut = require("./functions/printOut.js");
const degree = require("./functions/degree.js");
const evaluate = require("./functions/evaluate.js");
const stringGenerator = require("./functions/stringGenerator.js");
const addition = require("./functions/addition.js");
const subtraction = require("./functions/subtraction.js");
const multiply = require("./functions/multiply.js");
const derivative = require("./functions/derivative.js");

const regex = /[+-]?\d+x\^\d+|[+-\s]?\d+/g;

let userInput = "1x^2+1";
let polynomialArray = [];
