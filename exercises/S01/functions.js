function printHello() {
  console.log("Hello World!");
}
printHello();

function getHello() {
  return "Hello World!!";
}
const hello = getHello();
console.log("result of getHello():", hello);

// more complex example with parameters:
function addTwoNumbersNotOptional(numberOne, numberTwo) {
  const result = numberOne + numberTwo;
  return result;
}

// shorter:
function addTwoNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
const result1 = addTwoNumbers(1, 2);
console.log("result of 1 + 2:", result1);

const result2 = addTwoNumbers("a", "b");
console.log("result of a + b:", result2);

const result3 = addTwoNumbers("a", 12);
console.log("result of a + 12:", result3);

function printSumOfValues(numberOne, numberTwo) {
  console.log("Sum:", numberOne + numberTwo);
}
printSumOfValues(20, 33);

const result4 = printSumOfValues(44, 11);
console.log("result from printSumOfValues:", result4);

function multiplication(paramOne, paramTwo) {
  return paramOne * paramTwo;
}
const resultOfMultiplication = multiplication(3, 7);
console.log("Result of multiplication:", resultOfMultiplication);

// optional and default parameters
function addTwoNumbers(numberOne, numberTwo = 2) {
  return numberOne + numberTwo;
}
const resultOptionalAndDefault = addTwoNumbers(1);
console.log("result of addTwoNumbers(1):", resultOptionalAndDefault);

const resultSecond = addTwoNumbers(1, 4);
console.log("result of addTwoNumbers(1, 4):", resultSecond);

//undefined
function doSomething(numberOne) {
  console.log("numberOne for addTwoStrings has value:", numberOne);
}
doSomething();

function joinStrings(param1, param2, param3 = "!") {
  return `${param1} ${param2} ${param3}`;
}
const result = joinStrings("Hello", "World");
console.log(result);
