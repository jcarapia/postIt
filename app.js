var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);
server.listen(port);
console.log('Server started');

