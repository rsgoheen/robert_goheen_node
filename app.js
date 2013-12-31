var express = require('express');
var app = express();
var path = require('path');

var fs = require('fs');
var logFile = fs.createWriteStream('./logs/expressLog.log', {flags: 'a'});

var routes = require('./routes');

app.set('port', process.env.PORT || 16541);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express)

app.use(express.favicon());
app.use(express.logger({'stream': logFile}));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
//app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'static')));

app.get ('/', routes.index);

var port = app.get('port');
app.listen(port);
console.log("Started listening on port ", port);