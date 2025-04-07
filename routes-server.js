const http = require('http');

const server = http.createServer((req, res) =>{
    const url = req.url;

    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the Home Page');
    }
    else if(url === '/about'){
        res.writeHead(200., {'Content-Type': 'text/plain'});
        res.end('welcome to the About Page');
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('Page not found')
    }


});

server.listen(3001, () => {
    console.log("Server is running at 3001");
})