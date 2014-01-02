var fs = require('fs');

exports.getLogConfig = function() {
	var logFile = fs.createWriteStream('./logs/expressLog.log', {flags: 'a'});
	var logFormat = ':res[x-forwarded-for] - - [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
	return {'stream': logFile};
};
