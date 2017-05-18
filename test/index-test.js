"use strict";

var chai = require("chai"),
		expect = chai.expect,
		should = require("mocha-should");

var factory = require("../src/index")["framework:nodewebkit-mocha"][1];

describe("Wrap Mocha test", function() {
	should("throw error when mocha not in file list", function() {
		expect(function() { factory([]); }).to.throw(Error);
	});

	should("wrap mocha with supporting files", function() {
		var files = filesToServe();

		factory(files);

		expect(files.length).to.equal(3 + 2);
		expect(files[1].pattern).to.match(/save-global.js/);
		expect(files[3].pattern).to.match(/restore-global.js/);
	});
});

/*
 * This list is deliberately ordered to have 'mocha.js' in the middle
 * to test the searching logic.
 */
function filesToServe() {
	return [
		{ "pattern": "node_modules/karma-mocha/lib/adapter.js" },
		{ "pattern": "node_modules/mocha/mocha.js" },
		{ "pattern": "test/test-using-karma.js" }
	]
}
