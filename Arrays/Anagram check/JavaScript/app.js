
var input = {
  s1: 'They See',
  s2: 'THE EYES'
};

(function (input) {

  var _as1 = stringToAraay(input.s1);
  var _as2 = stringToAraay(input.s2);

  var _count = {};

  function init() {

    if (_as1.length !== _as2.length) {
      console.log('Not anagrams!');
      return false;
    }

    addToCounter(_as1);
    subtractFromCounter(_as2);

    var allCountIsZero = checkIfAllKeysInCountIsZero();

    if (allCountIsZero) {
      console.log('They are anagrams');
    }
    else {
      console.log('Not anagrams!');
    }

  }

  function addToCounter(str) {

    var i, len = str.length, letter;

    for (i = 0; i < len; i++) {

      letter = str[i];

      if (_count.hasOwnProperty(letter)) {
        _count[letter] += 1;
      }
      else {
        _count[letter] = 1;
      }

    }

  }

  function subtractFromCounter(str) {

    var i, len = str.length, letter;

    for (i = 0; i < len; i++) {

      letter = str[i];

      if (_count.hasOwnProperty(letter)) {
        _count[letter] -= 1;
      }
      else {
        _count[letter] = 1;
      }

    }

  }

  function checkIfAllKeysInCountIsZero() {

    var i,
      keys = Object.keys(_count),
      len = keys.length;

    for (i = 0; i < len; i++) {
      var key = keys[i];
      if (_count[key] > 0) {
        return false;
      }
    }

    return true;

  }

  function stringToAraay(str) {

    return str.split(' ').join('').toLowerCase().split('');

  }

  init();

}(input));



