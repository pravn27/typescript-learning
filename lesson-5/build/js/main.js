"use strict";
let a = "hello";
let b = a;
let c = a;
let userName = "praveen";
let userId = 100;
// assertion
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return `${a}${b}`;
};
// assertion to string by adding as string after the function call
let returnValString = addOrConcat(2, 2, "concat");
// be careful, this will throw an error at runtime
// Be careful, TS sees NO problem, but string is returned from the function
let returnValNumber = addOrConcat(2, 2, "concat");
// In the DOM
const imgSelected = document.querySelector("img");
imgSelected.src;
// non null assertion operator !
const selectedDiv = document.querySelector("div");
selectedDiv.style.backgroundColor = "red";
