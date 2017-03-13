'use strict'

var file = {}
// function that gets the reverse of a string and compare if the string is the same as when its being reversed;
file.reverseString = function (word) {
  if ((word.length === 0) || (typeof word !== 'string')) {  // condition that checks if input is null or if input is not a string;
    return null;
  }
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {    // a for loop that is responsible for reversing the string;
    reversedWord += word[i];
  }
  if (word === reversedWord) {                    // condition that checks if the words is the same as when its being reversed;
    return true;
  } else {
    return reversedWord;
  }
}

module.exports = file;