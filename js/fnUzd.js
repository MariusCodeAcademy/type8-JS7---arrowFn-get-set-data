// parasyti visai budais funckija kuri paima 3 sk ir grazina
// visus skaicius sudetus ir atimti 10
// function declaration
function countNumber(num1, num2, num3) {
  const result = num1 + num2 + num3 - 10;
  console.log('result ===', result);
  return result;
}
// function expression
const countNumberE = function (num1, num2, num3) {
  const result = num1 + num2 + num3 - 10;
  console.log('result ===', result);
  return result;
};
// arrow function su atskiru return
const countNumberA = (num1, num2, num3) => {
  const result = num1 + num2 + num3 - 10;
  console.log('result ===', result);
  return result;
};
// arrow function be return
const countNumberB = (num1, num2, num3) => num1 + num2 + num3 - 10;

const rez = countNumber(1, 2, 3);
countNumber(4, 5, 6);
console.log(countNumberB(1, 2, 3));
const countNumberBResult = countNumberB(1, 2, 3);
console.log('countNumberBResult ===', countNumberBResult);
