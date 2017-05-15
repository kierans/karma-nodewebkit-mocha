"use strict";

module.exports = {
	"env": {
		"node": true,
		"mocha": true
	},
	"globals": {},

	"rules": {
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"stroustrup",
			{ "allowSingleLine": true }
		],
		"camelcase": "error",
		"comma-dangle": [
			"error",
			"never"
		],
		"comma-style": [
			"error",
			"last"
		],
		"curly": [
			"error",
			"all"
		],
		"dot-notation": [
			"error",
			{
				"allowKeywords": true
			}
		],
		"eol-last": "error",
		"eqeqeq": [
			"error",
			"allow-null"
		],
		"guard-for-in": "error",
		"indent": [
			"error",
			"tab",
			{ "VariableDeclarator": 2, "SwitchCase": 1 }
		],
		"new-cap": "error",
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-constant-condition": "error",
		"no-debugger": "error",
		"no-delete-var": "error",
		"no-dupe-args": "error",
		"no-duplicate-case": "error",
		"no-else-return": "error",
		"no-empty": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-semi": "error",
		"no-eval": "error",
		"no-iterator": "error",
		"no-loop-func": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multiple-empty-lines": [
			"error",
			{ "max": 1, "maxEOF": 1}
		],
		"no-multi-spaces": "error",
		"no-new": "error",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-self-assign": "error",
		"no-throw-literal": "error",
		"no-undef": "error",
		"no-unused-vars": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-use-before-define": [
			"error",
			{ "functions": false, "classes": false }
		],
		"no-useless-call": "error",
		"no-with": "error",
		"quotes": [
			"error",
			"double"
		],
		"strict": "error",
		"wrap-iife": [
			"error",
			"outside"
		],
		"valid-typeof": "error"
	}
};
