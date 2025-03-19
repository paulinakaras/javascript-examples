const simpleObject = {
  propertyName: 1,
  otherPropertyName: "some other value",
};

const human = {
  name: "Dale Cooper",
  age: 40,
  hair: "black",
  height: 182,
  weight: 70,
};
console.log("base human:", human);
console.log("name:", human["name"]);

human["age"] = 44;
console.log("human after age change:", human);

human["occupation"] = "FBI Special Agent";
console.log("human after adding occupation:", human);

const occupation = {
  previous: "Deputy",
  current: "FBI Special Agent",
};
human["occupation"] = occupation;

console.log("human after changing occupation:", human);
console.log("current occupation:", human["occupation"]["current"]);

const friends = ["Harry S. Truman", "Hawk"];
human["friends"] = friends;
console.log("human after adding friends:", human);

// we can also create an array of objects:
const dale = {
  name: "Dale Cooper",
  age: 40,
};
const harry = {
  name: "Harry S. Truman",
  age: 39,
};
const hawk = {
  name: 'Tommy "Hawk" Hill',
  age: 41,
};
// then we create an array:
const department = [dale, harry, hawk];
console.log("Sheriffs Department:", department);
console.log("Second person from Department:", department[1]);
console.log("Name of second person from Department:", department[1]["name"]);

const user = {
  name: "test user",
  address: "test@test",
  password: "abc123",
  rights: ["write", "read"],
};
console.log(user);
console.log(user["name"]);
user["name"] = "admin";
console.log(user["name"]);
