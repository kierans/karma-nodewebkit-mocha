"use strict";

module.exports = function(config) {
	config.set({
		basePath: "..",
		frameworks: [ "mocha", "chai" ],
		browsers: [ "NodeWebkit" ],
		files: [
			"./test-using-karma.js"
		],
		plugins: [
			"karma-*"
		],
		singleRun: true
	});
};
