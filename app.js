var express = require('express');
var app = express();
var mustache = require('mustache');




app.get ('/', function(req.res) {
    res.send("Hello app");
});

var port = 27534;
app.listen(port);
console.log("Started listening on port ", port);