let clearDatabase = 1;

console.log("clearDatabase === 1 is:", clearDatabase === 1);

// in if we check if condition is true
if (clearDatabase === 1) {
  console.log("Database was cleared!");
} else {
  console.log("Database was not cleared!");
}

let someNumber = 1;

if (someNumber < 0) {
  console.log("someNumber < 0");
} else if (someNumber === 1) {
  console.log("someNumber is 1");
} else {
  console.log("someNumber > 1");
}

// If we have multiple cases... then we can use switch:
let someOtherNumber = 1;

switch (someOtherNumber) {
  case 1:
    console.log("someOtherNumber is 1");
    break;
  case 2:
  case 3:
    console.log("someOtherNumber is 2 or 3");
    break;
  default:
    console.log("someOtherNumber is unknown (neither 1, 2 nor 3)");
}

function printPlayersState(health) {
  if (health >= 100) {
    console.log("Player is alive and at full health!");
  } else if (health < 99 && health >= 10) {
    console.log("Player is alive and at ok health.");
  } else if (health < 10 && health >= 1) {
    console.log("Player is alive and at very poor health!");
  } else if (health < 1)
  {
    console.log("Player is dead.");
  }
}
printPlayersState(100)
printPlayersState(60)
printPlayersState(0)
printPlayersState(5)
printPlayersState(-1)