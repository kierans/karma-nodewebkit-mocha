"use strict";

module.exports = function(config) {
	config.set({
		basePath: ".",
		frameworks: [ "nodewebkit-mocha", "chai" ],
		browsers: [ "NodeWebkit" ],
		files: [
			"./test-using-karma.js"
		],
		plugins: [
			"karma-*",
			require("../../src/index")
		],
		singleRun: true
	});
};
