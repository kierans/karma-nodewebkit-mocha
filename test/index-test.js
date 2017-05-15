"use strict";

var chai = require("chai"),
		expect = chai.expect,
		should = require("mocha-should");

var dummy = require("../src/index");

describe("Dummy test", function() {
	should("have true be true", function() {
		expect(dummy()).to.be.true;
	});
});
