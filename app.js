require("./xyz.js"); // one module into another

const util = require("node:util");

const { calculateMultiply, calculateSum } = require("./calculate");
const data = require("./data.json");

console.log(data);

// for type:module
// import { x,calculateSum } from "./sum.js";

var name = "NodeJS";

var a = 10;
var b = 20;

var x = 100;

calculateSum(a, b);
calculateMultiply(a, b);

// console.log(name);
// console.log(a + b);
// console.log(global);

// console.log(this); Empty object

// console.log(globalThis);
console.log(x);
