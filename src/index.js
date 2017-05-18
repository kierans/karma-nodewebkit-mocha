"use strict";

var path = require("path");

var NOT_FOUND = -1;

function createPattern(path) {
	return { pattern: path, included: true, served: true, watched: false };
}

function wrapMocha(files) {
	var idx = files.findIndex(function(file) { return file.pattern.indexOf("mocha.js") !== NOT_FOUND; });

	if (idx === NOT_FOUND) {
		throw new Error("mocha.js not found in file list.  Is 'karma-mocha' installed?");
	}

	files.splice(idx, 0, createPattern(path.join(__dirname, "save-global.js")));

	// we want + 1 after the original index + 1 because we've added an element to the array.
	files.splice(idx + 2, 0, createPattern(path.join(__dirname, "restore-global.js")));
}

/*
 * By depending on the factory function "framework:mocha" we can ensure that it is
 * executed before our factory function runs.
 */
wrapMocha.$inject = [ "config.files", "framework:mocha" ];

module.exports = {
	"framework:nodewebkit-mocha": [ "factory", wrapMocha ]
};
