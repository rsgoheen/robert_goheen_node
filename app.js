var express = require('express');
var app = express();
var path = require('path');

var logConfig = require('./logConfig.js');

var routes = require('./routes');
var affiliate = require('./routes/affiliate.js');

app.set('trust proxy', true);
app.set('port', process.env.PORT || 16541);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);

app.use(express.favicon());
app.use(express.logger(logConfig.getLogConfig()));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'static')));

app.get ('/', routes.index);
app.get ('/affiliates', affiliate.show);

var port = app.get('port');
app.listen(port);
console.log("Started listening on port ", port);
