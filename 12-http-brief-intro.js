const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is a short history...');
    } else {
        res.end('<h1>Oops!</h1>');
    }
})

server.listen(2112)