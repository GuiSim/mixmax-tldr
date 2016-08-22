var express = require('express');
var app = express();
var sync = require('synchronize');
var cors = require('cors');
var fs = require('fs');
var https = require('https');
var http = require('http');

// Use fibers in all routes so we can use sync.await() to make async code easier to work with.
app.use(function(req, res, next) {
    sync.fiber(next);
});

// Since Mixmax calls this API directly from the client-side, it must be whitelisted.
var corsOptions = {
    origin: /^[^.\s]+\.mixmax\.com$/,
    credentials: true
};

app.get('/typeahead', cors(corsOptions), require('./api/typeahead'));
app.get('/resolver', cors(corsOptions), require('./api/resolver'));

var options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};


http.createServer(app).listen(process.env.PORT || 9145);
https.createServer(options, app).listen(process.env.SECURE_PORT || 9445);