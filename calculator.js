/*Local variables*/
let number1;
let number2;
let operator;

/*Test functions using console.log */
function addition(a, b) {
  return a + b;
}
const thing = addition(1, 2);
console.log(thing);

function subtraction(a, b) {
  return a - b;
}
const thing2 = subtraction(2, 1);
console.log(thing2);

function multiplication(a, b) {
  return a * b;
}
const thing3 = multiplication(2, 2);
console.log(thing3);

function division(a, b) {
  return a / b;
}
const thing4 = division(4, 2);
console.log(thing4);

/*function to take two numbers and operator */
function operate(number1, operator, number2) {
  switch (operator.trim()) {
    case '+':
      return number1 + number2;
      break;
    case '-':
      return number1 - number2;
      break;
    case '*':
      return number1 * number2;
      break;
    case '/':
      return number1 / number2;
      break;
  }


}
