'use strict';
sayHiDeclaration();

// function declaration
function sayHiDeclaration() {
  console.log('Hi');
}
// function invocation
// sayHiDeclaration();

// sayHiExpresion(); // gaunam klaida nes negalima naudoti aukciau uz funcijos aprasyma
// function expression
const sayHiExpresion = function () {
  console.log('HiExpresion');
};

sayHiExpresion();

const fn = {
  sum: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
};

const minusResul = fn.minus(50, 40);
console.log('minusResul ===', minusResul);

// console.log('sayHiExpresion ===', sayHiExpresion);

const anonymFn = function () {
  console.log('hello world');
};
// ES6 js version introduced, arrow function
const arrowFn = () => console.log('hello world');

anonymFn();
arrowFn();

// anonimines fn kurio grazina rezult
// anonimine sumos funckija kuri grazina 2 sk suma
const sumValues = function (a, b) {
  return a + b;
};
// ilgesnis var
const sumValuesArrow = (a, b) => {
  return a + b;
};
// => - grazina reiksme su return jei nera {}
const sumValuesArrowReturn = (a, b) => a + b;

console.log(sumValues(10, 5));
console.log(sumValuesArrow(10, 5));
console.log(sumValuesArrowReturn(10, 5));
