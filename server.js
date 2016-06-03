const http = require('http');
const url = require('url');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    var message = (query && query.message) ? query.message : 'Hello World';
    var obj = {
        'message': message,
        'env': process.env
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});