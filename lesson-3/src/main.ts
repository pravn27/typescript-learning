// Array types

// string array which accepts only string values
let stringArray: string[] = ["first", "second", "third"];
// stringArray[0] = 12; // Error: Type '12' is not assignable to type 'string'
// stringArray.push(12); // Error: Argument of type '12' is not assignable to parameter of type 'string'

let mixedArrayTypes = ["first", 122, "third"];

// mixedArrayTypes.push(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
mixedArrayTypes.push(12); // OK
mixedArrayTypes.push("hello"); // OK

let mixedData = [12, "hello", true];

mixedArrayTypes = stringArray; // OK

let test = [];

let bands: string[] = [];
bands.push("Led Zeppelin");
bands.push("The Beatles");
bands.push("Led Zeppelin");
// bands.push(true);

// Tuple types

let myTuple: [string, number, boolean] = ["hello", 10, true];
let mixed = ["hello", 10, true];

// myTuple[1] = "world"; // Error: Type 'string' is not assignable to type 'number'
myTuple[1] = 12;

// Object types

let myObject: object;

let personObj = {
  name: "Praveen S",
  age: 33,
  isDev: true,
};

// personObj.name = 12; // Error: Type '12' is not assignable to type 'string'
personObj.name = "Praveen Shekarappa";

// Object type annotations

type SEPerson = {
  name: string;
  age: number;
  isDev: boolean;
  yearsOfExperience?: (number | string)[];
};

// type & interface are similar in TypeScript
// mainly interface used in class implementation
interface Person {
  name: string;
  age: number;
  isDev: boolean;
}

let user1: SEPerson = {
  name: "Praveen Shekarappa",
  age: 33,
  //isDev: "test", // Error: Type 'string' is not assignable to type 'boolean'
  isDev: true,
  yearsOfExperience: [12, 13, 14, "15"],
};

let builder: SEPerson = {
  name: "Praveen S",
  age: 33,
  isDev: true,
  //Optional object property yearsOfExperience
  //  yearsOfExperience: [12, 13, 14, "15"],
};

const getName = (personObj: SEPerson): string => {
  return personObj.name?.toUpperCase();
};

console.log(getName(user1));

// enums

enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2