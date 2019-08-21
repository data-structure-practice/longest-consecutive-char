'use strict'

const expect = require('expect.js')
const longestChar = require('../src/index')

describe('Longest Consecutive Character', function() {
  describe('longestChar', function() {
    it('returns `{\'F\': 4}` for "AABBCCCDEEFFFFG"', function() {
      expect(longestChar("AABBCCCDEEFFFFG")).to.eql({'F': 4});
    });

    it('returns `{\'S\': 2}` for "ALCOENBSSMECKEJ"', function() {
      expect(longestChar("ALCOENBSSMECKEJ")).to.eql({'S': 2});
    });
  });
});
