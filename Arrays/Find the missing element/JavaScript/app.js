
var input = {
  ar1: [1, 2, 3, 4, 5, 6, 7],
  ar2: [3, 7, 2, 1, 4, 6]
};

(function (input) {

  var _count = {};

  function init() {

    if (input.ar1.length - input.ar2.length > 1) {
      console.log('More than one number is missing!');
    }

    addToCounter(input.ar1);
    subtractFromCounter(input.ar2);

    var k = findTheKeyWhereValueNotZero(_count);

    if (k) {
      return console.log("Missing number is: ", k);
    }

    console.log("No missing number");

  }

  function addToCounter(arr) {

    var i, len = arr.length, num;

    for (i = 0; i < len; i++) {

      num = arr[i];

      if (_count.hasOwnProperty(num)) {
        _count[num] += 1;
      }
      else {
        _count[num] = 1;
      }

    }

  }

  function subtractFromCounter(arr) {

    var i, len = arr.length, num;

    for (i = 0; i < len; i++) {

      num = arr[i];

      if (_count.hasOwnProperty(num)) {
        _count[num] -= 1;
      }
      else {
        _count[num] = 1;
      }

    }

  }

  function findTheKeyWhereValueNotZero(obj) {

    return Object.keys(obj).find(function (key) {
      if (obj[key] > 0) {
        return key;
      }
    });
  }

  init();

}(input));



