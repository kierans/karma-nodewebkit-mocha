"use strict";

module.exports = function(grunt) {
	var MOCHA_REPORTER = "progress";

	grunt.initConfig({
		eslint: {
			options: {
				configFile: ".eslintrc.js"
			},
			gruntfile: {
				src: "Gruntfile.js"
			},
			src: {
				src: [ "src/**/*.js" ]
			},
			test: {
				src: [ "test/**/*.js" ]
			}
		},
		mochaTest: {
			options: {
				timeout: 2000,
				ignoreLeaks: false,
				ui: "bdd",
				reporter: MOCHA_REPORTER
			},

			all: {
				src: "test/**/*.js"
			}
		},
		mocha_istanbul: { // eslint-disable-line camelcase
			options: {
				reporter: MOCHA_REPORTER
			},
			coverage: {
				src: "test",
				options: {
					mask: "*-test.js"
				}
			}
		},
		shrinkwrap: {
			dev: true,
			dedupe: true,
			prune: true
		}
	});

	require("load-grunt-tasks")(grunt);

	grunt.registerTask("lint", [ "eslint" ]);
	grunt.registerTask("test", [ "mochaTest:all" ]);

	grunt.registerTask("coverage", [ "mocha_istanbul" ]);
	grunt.registerTask("default", [ "lint", "coverage" ]);
};
