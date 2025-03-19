let clearDatabase = true;

if (clearDatabase === true) {
  console.log("Database was cleared!");
} else {
  console.log("Database was not cleared!");
}
console.log("1 === 1 is:", 1 === 1);
console.log("1 === true is:", 1 === true);
console.log("1 == 1 is:", 1 == 1);
console.log("1 == true is:", 1 == true);

function elementChecker(anArray) {
  anArray.forEach((element) => {
    if (element === 1) {
      console.log("Element value is one!");
    }
    if (element === 0) {
      console.log("Element value is zero!");
    }
  });
}
elementChecker([1, 2, false, 0, 8, 0, 1, 8, true, "test", "0"]);
