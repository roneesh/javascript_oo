var util = require('util');

exports.propView = function(context) {
	for (prop in context) {
		console.log(prop + " : " + util.inspect(context[prop]));
	}
	return "*** END util.propView END ***"
}

exports.conLog = function(toLog) {
	console.log(util.inspect(toLog));
}

exports.extend = function(childObject, parentObject) {
	for (property in parentObject) {
		childObject[property] = parentObject[property];
	}
}