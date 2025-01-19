type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two;
let c = a as Three;

let userName = <One>"praveen";
let userId = <string | number>100;

// assertion
const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return `${a}${b}`;
};
// assertion to string by adding as string after the function call
let returnValString: string = addOrConcat(2, 2, "concat") as string;

// be careful, this will throw an error at runtime
// Be careful, TS sees NO problem, but string is returned from the function
let returnValNumber: number = addOrConcat(2, 2, "concat") as number;

// In the DOM
const imgSelected = document.querySelector("img") as HTMLImageElement;
imgSelected.src;
// non null assertion operator !
const selectedDiv = document.querySelector("div")!;
selectedDiv.style.backgroundColor = "red";

// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// 1st variation: (Beginner)
// let year: HTMLElement | null
// year = document.getElementById("year")
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear
// }

// 2nd variation: (with Type Assertion)
const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
