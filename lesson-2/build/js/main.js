"use strict";
let myName = "Praveen S";
let myAge = 33;
let isDeveloper = true;
isDeveloper = false;
console.log(`Hello ${myName}, your age is ${myAge}, are you a developer? ${isDeveloper}`);
// any type can be any type of data
let album;
album = 2;
album = "Praveen S";
const sum = (a, b) => {
    return a + b;
};
// Union types
let isStringOrNumber;
isStringOrNumber = 2;
isStringOrNumber = "Praveen S";
isStringOrNumber = true;
let isActive;
// Regular expression in TypeScript type
let wordPattern = /\w+/g;
