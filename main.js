"use strict";

let userInput = prompt("Input a function", "x");
let polynomialArray = [];

function arrayGenerator(polynomial) {
    polynomial.forEach((monomial) => {
      let polynomialProps = monomial.split('^');
      polynomialArray.push({
          coefficient: parseFloat(monomial[0]),
          power: function(monomial) {
            if(monomial[1] != null) {
              return parseInt(monomial[1]);
            } else {
              return 0;
            }
          }
      });
    });
    console.log(polynomialArray);
}

arrayGenerator(userInput.match(/[+-]?\d+x\^\d+|[+-\s]\d[+-\s]/g));
