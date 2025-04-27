const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our Home Page");
    }
    else if (req.url === '/about') {
        res.end("Welcome to About Page");
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>This page is not available</p>
            <a href="/">Back to Home page</a>
        `);
    }
});

server.listen(3000);
