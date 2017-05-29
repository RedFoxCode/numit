const assert = require("assert");
require("../lib");

describe("Array generation", function() {
	it("Should generate array of 10 numbers", function() {
		assert.equal([...10].join(""), "12345678910");
	});

	it("Should generate array of 2 negative numbers", function() {
		assert.equal([...-2].join(""), "-1-2");
	});

	it("Should throw an exception", function() {
		try {
			[...Infinity];
		} catch (e) {
			return;
		}
	});
});