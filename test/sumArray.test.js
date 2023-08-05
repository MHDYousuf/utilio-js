import assert from "assert";
import sumArray from "../sumArray.js";

describe("Sum - Array of Numbers", function () {
  it("should return the total of array", function () {
    assert.strictEqual(sumArray([10, 20, 10]), 40);
  });
});
