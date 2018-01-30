var express = require('express');
var server = express();

server.use(express.static(__dirname));

server.listen(4200);

console.log('server is running 4200');