/*const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, {'Content-Type': "text/html"});
    res.end('meta charset="UTF-8"> Hello JS geeks from JMD');
}).listen(3001, ()=>console.log('server pret sur http://localhost:3001'));*/

/* NO SE SI SERVIRA
const http = require('http');

let server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, {'Content-Type': "text/html"});
    res.end('meta charset="UTF-8"> Hello JS geeks from JMD');
}).listen(3001, ()=>console.log('server pret sur http://localhost:3001'));

*/

/*
const http = require('http');

function responseRequest(req, res) {
    console.log(req);
    res.writeHead(200, {'Content-Type': "text/html"});
    res.end('meta charset="UTF-8"> Hello JS geeks from JMD');
}).

function onListen() {console.log('server pret sur http://localhost:3001')};
let server = http.createServer(onRequest);

server.listen(3001, onListen);
*/

const http = require('http');

//const port;
//if (process.env.PORT) port = process.env.PORT;
//else port = 3001;

const port = process.env.PORT || 3001;

function onRequest(req, res) {
    console.log(req);
    res.writeHead(200, {'Content-Type': "text/html"});
    res.end('<meta charset="UTF-8"> Hello JS geeks from JMD');
}

function onListen() {
    console.log('server pret sur http://localhost:'+ port)
}
    let server = http.createServer(onRequest);

server.listen(3001, onListen);
