var fs = require('fs');

function handleFile(err, data) {
	if (err) throw err;
	return JSON.parse(data);
}

var config = JSON.parse(
	fs.readFileSync('./index_configuration.json'));

exports.config = config;