"use strict";
// function
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
// log messages, which does not return anything
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello, TypeScript!");
logMessage(add(2, 2));
logMessage(subtract(5, 2));
// interface mathFunction
// interface mathFunction {
//   (a: number, b: number): number;
// }
const add2 = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a * b;
};
logMessage(multiply(3, 2));
// optional parameters ?
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default parameters
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
logMessage(addAll(1, 2));
logMessage(addAll(1, 2, 3));
logMessage(sumAll(1, 2));
// Rest parameters
const numberArraySum = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr, 0);
};
logMessage(numberArraySum(1, 2, 3, 4, 5));
