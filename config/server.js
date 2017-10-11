'use strict'

const app = require('../src/app');
const debug = require('debug')('balta:server');
const http = require('http');

const port = 3000; // process.env.PORT ||
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);
console.log('API rodando na porta ' + port);