import http from 'http';

const server = http.createServer((req, res) => {
    res.write('Hello Http!\n');
    setTimeout(() => {
        res.write('It works\n');
        res.end();        
    }, 3000);    
});

server.listen(8080);