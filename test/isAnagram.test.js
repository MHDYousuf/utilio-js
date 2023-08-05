import isAnagram from '../isAnagram.js'
import {expect} from 'chai'


describe('isAnagram', () => { 
  it("should return true for anagrams", function() {
    expect(isAnagram('anagram','nagaram')).to.equal(true)
  })
  it("should return false for not anagrams", function() {
    expect(isAnagram("cat", "tar")).to.equal(false);
  })
 })