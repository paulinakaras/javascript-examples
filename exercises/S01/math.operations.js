const exResult = 3 ** 2;
console.log(exResult);

const sqrValue = 9;
const sqrtResult = Math.sqrt(9);
console.log(sqrtResult);

// incrementation (increasing value by 1)
let valueInc = 5;
console.log(valueInc);
valueInc = valueInc + 1;
console.log("First incrementation (value +1):", valueInc);
valueInc += 1;
console.log("First incrementation (value += 1):", valueInc);
valueInc++;
console.log("First incrementation (value ++):", valueInc);

// decrementation
let valueDec = 5;
console.log(valueDec);
valueDec = valueDec - 1;
console.log("First incrementation (value - 1):", valueDec);
valueDec -= 1;
console.log("First incrementation (value -= 1):", valueDec);
valueDec--;
console.log("First incrementation (value --):", valueDec);

// random value
const randomValue = Math.random(); // between 0 and 1
console.log("Random value between 0 and 1:", randomValue);

const anotherValue = Math.random() * 5; // between 0 and 5
console.log("Random value between 0 and 5:", anotherValue);

const randomValueFromRange = 2 + Math.random() * 5; // between 2 and 7
console.log("Random value between 2 and 7:", randomValueFromRange);

// round value
const randomVal = 2 + Math.random() * 5; // between 2 and 7
console.log("Random value between 2 and 7:", randomValueFromRange);
console.log("Round value:", Math.round(randomValueFromRange));
console.log("Floor (round down) value:", Math.floor(randomValueFromRange));
console.log("Floor (round up) value:", Math.ceil(randomValueFromRange));
