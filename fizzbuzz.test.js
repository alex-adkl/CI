const test = require("node:test");
const assert = require("node:assert");
const { fizzbuzz } = require("./fizzbuzz.js");

test("fizzbuzz(4)", () => {
  assert.strictEqual(fizzbuzz(4), "Fizz");
});
