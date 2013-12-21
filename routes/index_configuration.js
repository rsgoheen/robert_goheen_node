var fs = require('fs');

var config = JSON.parse(
	fs.readFileSync('./index_configuration.json'));

exports.config = config;