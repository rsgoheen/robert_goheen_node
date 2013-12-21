var fs = require('fs');

exports.index = function(req, res) {
	readData(req, res);
};

function readData(req, res) {
	fs.readFile	('./index_configuration.json', function (err, data) {
		if (err) return handleError(err);
		console.log(JSON.parse(data.toString()).taglines);
		renderData(data.toString(), res);	
	});
}

function renderData(data, res) {
	var json = JSON.parse(data);
	var settings = {};
	settings.tagline = json.taglines[Math.floor(Math.random() * json.taglines.length)];
	settings.theme = json.themes[Math.floor(Math.random() * json.themes.length)];

	console.log("tagline: " + settings.tagline);

	res.render('index', settings);
}

function handleError(err, res) {
	console.error(err);
}

