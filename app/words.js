module.exports = {
  words: function(word) {
    var wordsArray = word.replace('\t',' ').replace('\n',' ').split(/\ +/); //this line replaces tabs and new lines with one space then splits using multiple space as delimiter
      var sortedWords = {};
      var newWord;

      for(var i = 0; i < wordsArray.length; i++) {
        newWord = wordsArray[i];
        if(newWord !== '') {
          if(sortedWords.hasOwnProperty(newWord)) {  //this condition checks if the words repeat;
            sortedWords[newWord]++;
          } else {
            sortedWords[newWord] = 1;
          }
        }
      }
      return sortedWords;
    }
}

