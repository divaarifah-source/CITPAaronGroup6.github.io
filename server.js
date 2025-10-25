// Minimal static server
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './exec.html';
    }

    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'text/plain';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
    console.log('Open http://127.0.0.1:8080/exec.html in your browser');
});
