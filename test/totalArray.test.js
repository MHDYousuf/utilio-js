import assert from "assert";
import total from "../totalArray.js";

describe("Total - Array of Numbers", function () {
  it("should return the total of array", function () {
    assert.strictEqual(total([10,20,10]),40);
  });
});
