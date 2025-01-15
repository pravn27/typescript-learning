// type aliases
type stringOrNumber = string | number;

// type & interface are similar in TypeScript, but not the same
// mainly interface used in class implementation
interface Person {
  name: string;
  age: number;
  isDev: boolean;
  yearsOfExperience?: stringOrNumber[];
}

type UserId = stringOrNumber; // type alias

// function
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// log messages, which does not return anything
const logMessage = (message: any): void => {
  console.log(message);
};

logMessage("Hello, TypeScript!");
logMessage(add(2, 2));
logMessage(subtract(5, 2));

// Since add, subtract function has same type signature, we can use type alias

type mathFunction = (a: number, b: number) => number;

// interface mathFunction
// interface mathFunction {
//   (a: number, b: number): number;
// }
const add2: mathFunction = (a, b) => {
  return a + b;
};

const multiply: mathFunction = (a, b) => {
  return a * b;
};

logMessage(multiply(3, 2));

// optional parameters ?
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default parameters
const sumAll = (a: number, b: number, c: number = 0): number => {
  return a + b + c;
};

logMessage(addAll(1, 2));
logMessage(addAll(1, 2, 3));
logMessage(sumAll(1, 2));

// Rest parameters
const numberArraySum = (...nums: number[]): number => {
  return nums.reduce((prev, curr) => prev + curr, 0);
};

logMessage(numberArraySum(1, 2, 3, 4, 5));
