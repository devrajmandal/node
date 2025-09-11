const fs = require('fs');
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2;  // you can set threadpool size from by default 4 to any size you want.

crypto.pbkdf2("password","salt",5000000,50,"sha512", (err,key) =>{
    console.log("1 - cryptotoPBKDF2 done");    
}) 

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File reading CB");    
})

crypto.pbkdf2("password","salt",5000000,50,"sha512", (err,key) => {
    console.log("2 - cryptotoPBKDF2 done");    
})