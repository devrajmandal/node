const fs= require("fs");
const { nextTick } = require("process");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Time expired"),0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf-8", () => {
    setTimeout(() => console.log("2nd timer"),0);
    
    process.nextTick(() => console.log("2nd nextTick"))
    setImmediate(() => console.log("2nd setImmediate"));
    console.log("File reading CB");    
})

process.nextTick(() => console.log("nextTick"));
console.log("Last line of the file");


// Last line of the file
// nextTick
// promise
// Time expired
// setImmediate
// File reading CB
// 2nd nextTick
// 2nd setImmediate
// 2nd timer