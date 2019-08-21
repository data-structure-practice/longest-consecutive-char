'use strict'

function longestChar(string) {
  let longChar, longCharCount = 0, currChar = string[0], currCharCount = 1;
  for (let i=1; i<string.length; i++) {
    if (string[i] === currChar) {
      currCharCount++
    } else {
      if (currCharCount > longCharCount) {
        longChar = currChar;
        longCharCount = currCharCount;
      }
      currChar = string[i];
      currCharCount = 1
    }
  }
  return {[longChar]: longCharCount}
}

module.exports = longestChar;
