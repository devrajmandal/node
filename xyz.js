// require("/path")
// All the code of the module is wrapped inside a function(IIFE)

// IIFE -> Immediately Invoked Function Expression

// when we use require and pass a function name inside it then all the code of that function will be wrapped inside the IIFE function and then calling it by javascript and then it will be passed onto V8 engine.

// (function (module,require) {
//   // All code of the module runs inside here
//   // It keeps your variables and functions private
//   var a = 100; // a is independent of the the other variable outside this IIFE function
// })(module.exports={});

// How are variables and functions private in different modules?
// -> Because of IIFE(wrapping code) and require statement

// How do you get access to module.exports? Where is the module coming from?
// -> NodeJs gives the module and when a code is wrapped inside a function, the function has a parameter "module" by default along with "require".
// module.exports is an empty object
// var a = 1000;

// function x() {
//     const a=10;

//     function b() {
//         console.log("b");
//     }
// }

// require('/path')
    // 1> Resolving the module
        // checks whether the module is local path or json or node:module
    // 2> Loading the module
        // file content is loaded according to file type
    // 3> Wraps inside an IIFE
    // 4> Code evaluation
        // code is evaluated & Require and module.exports happens
    // 5> Caching
        // node caches the require