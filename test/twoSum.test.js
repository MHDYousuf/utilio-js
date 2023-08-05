//test two sum

/*
 * @param {Array} array of numbers
 * @param {Number} denotes the target
 */

import twoSum from "../twoSum.js";
import {expect} from 'chai'

describe("twoSum", () => {
  it("should give indices with true in an array", () => {
    const result = [2,3]
    expect(twoSum([2, 7, 11, 15], 26)).to.include.deep.members(result)
  });
  it("should give empty array if target not found in an array", () => {
    expect(twoSum([2, 7, 11, 15], 21)).to.have.lengthOf(0)
  });
});
