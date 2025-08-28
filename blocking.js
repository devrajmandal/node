const crypto = require("node:crypto");
console.log("Hello world");

var a = 1078698;
var b = 20986;

// synchronous function will block the main thread, don't use it!!!!!
crypto.pbkdf2Sync("password", "salt", 5000000,50, "sha512");
console.log("First key is generated");

// password base key derivative function
// async function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second Key is generated");
});

function multiplyFn(x, y) {
  const result = x * y;
  return result;
}

var c = (multiplyFn = multiplyFn(a, b));
console.log("Multiplication result: ", c);
