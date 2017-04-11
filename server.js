import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

// curl http://localhost:8080/
// output: Hello Express
server.get('/', (req, res) => {
    res.render('index', {
        content:'...'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});
