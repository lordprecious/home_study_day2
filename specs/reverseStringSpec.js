reverseString = require('../app/reverseString.js').reverseString;

describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(reverseString('civic')).toEqual(true);
    });

    it("should return true for `pap`", function() {
      expect(reverseString('pap')).toEqual(true);
    });

    it("should return true for `anna`", function() {
      expect(reverseString('anna')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(reverseString('misc')).toEqual('csim');
    });

    it("should return `suoicerp` for `precious`", function() {
      expect(reverseString('precious')).toEqual('suoicerp');
    });

    it("should return `nac` for `can`", function() {
      expect(reverseString('can')).toEqual('nac');
    });

  });

  describe("Case for wrong inputs", function() {

    it("should return null for numbers", function() {
      expect(reverseString(535)).toEqual(null);
    });

    it("should return null for numbers", function() {
      expect(reverseString(333)).toEqual(null);
    });

  });

});