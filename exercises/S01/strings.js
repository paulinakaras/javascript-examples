const string1 = "Hello";
const string2 = "World";

let stringsConcat = string1 + string2;
let stringsWithSpace = string1 + " " + string2;

console.log("stringsConcat:", stringsConcat);
console.log("stringsWithSpace:", stringsWithSpace);
console.log(`Hello my dear ${string2}!`);
console.log(`${string1} my dear ${string2}!`);

let dogStatus = "Healthy";
dogStatus += " and reasting!";
console.log("dogStatus:", dogStatus);

const testType = "integration tests";
const testStatusPassed = "passed";
const testStatusFailed = "failed";

console.log(`${testType} ${testStatusFailed} ${testStatusPassed}`);
console.log(`${testType}: ${testStatusFailed}`);
console.log(`${testType}: ${testStatusPassed}`);

