const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, {'Content-Type': "text/html"});
    res.end('meta charset="UTF-8"> Hello JS geeks from JMD ê');
}).listen(3001, ()=>console.log('server pret sur http://localhost:3001'));