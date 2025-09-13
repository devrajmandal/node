// const http = require('node:http'); can add "node:" where it is a core module of node
const http = require('http');

const server = http.createServer(function(req,res){

    if(req.url === '/getSecretData'){
        res.end("There is no secret data.");
    }
    res.end("Hello world");   // responds back as message 
});

server.listen(7777);