const test = require("node:test");
const assert = require("node:assert");
const { fizzbuzz } = require("./fizzbuzz.js");

test("fizzbuzz(4)", () => {
  assert.strictEqual(fizzbuzz(3), "Fizz");
});

test("fizzbuzz(15)", (t) => {
  assert.strictEqual(fizzbuzz(15), "Fizzbuzz");
});
