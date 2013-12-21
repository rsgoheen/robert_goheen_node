var ic = require('./index_configuration.js');

exports.getTagline = function getTagline() {
	return ic.config.taglines[
		Math.floor(Math.random() * ic.config.taglines.length)
	];
};

exports.getTheme = function() {
    return ic.config.themes[
	Math.floor(Math.random() * ic.config.themes.length)
    ];
};