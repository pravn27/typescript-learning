let myName: string = "Praveen S";
let myAge: number = 33;
let isDeveloper: boolean = true;
isDeveloper = false;
console.log(
  `Hello ${myName}, your age is ${myAge}, are you a developer? ${isDeveloper}`
);

// any type can be any type of data
let album: any;

album = 2;
album = "Praveen S";

const sum = (a: number, b: number): number => {
  return a + b;
};

// Union types
let isStringOrNumber: string | number | boolean;
isStringOrNumber = 2;
isStringOrNumber = "Praveen S";
isStringOrNumber = true;
let isActive: boolean | string;

// Regular expression in TypeScript type
let wordPattern: RegExp = /\w+/g;
