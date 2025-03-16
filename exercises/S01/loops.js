for (let index = 0; index < 3; index++) {
  console.log("index:", index);
}

const anArray = [1, 4, "test", false];
for (let index = 0; index < anArray.length; index++) {
  const element = anArray[index];
  console.log("element:", index, element);
}

anArray.forEach((element) => {
  console.log("forEach element:", element);
});

function elementChecker(anArray) {
  anArray.forEach((element) => {
    console.log("elementChecker:", element);
  });
}

elementChecker([1, 2, "test"]);
