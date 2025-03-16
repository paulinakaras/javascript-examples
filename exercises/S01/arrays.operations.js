let arrayOfNumbers = [1, 2, 3];
console.log("arrayOfNumbers:", arrayOfNumbers);

// adding element to array
arrayOfNumbers.push(9);
console.log("arrayOfNumbers:", arrayOfNumbers);

// reading and removing elements from array
let value = arrayOfNumbers.pop();
console.log("value from arrayOfNumbers.pop():", value);
console.log("arrayOfNumbers:", arrayOfNumbers);

// Concating (joining) two arrays:
let newArrayOfNumbers = [7, 8, 9];
let biggerArray = arrayOfNumbers.concat(newArrayOfNumbers);
console.log("biggerArray after concat:", biggerArray);

// Replacing value from array:
let sampleArray = [5, 6, 7, 8, 9];
sampleArray[2] = 11;
console.log("sampleArray after change:", sampleArray);

const myArray = ["abc", "def", "gh"];
myArray.push("xyz");
console.log(myArray);
const newArray = [1, 2, 3];
const bigArray = myArray.concat(newArray);
console.log(bigArray);
bigArray[2] = 555;
console.log(bigArray);
