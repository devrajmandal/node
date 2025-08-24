function calculateMultiply(a, b) {
  const result = a * b;

  console.log(result);
}

setTimeout(() => {
  console.log("setTimeout");
}, 3000);

module.exports = { calculateMultiply };
