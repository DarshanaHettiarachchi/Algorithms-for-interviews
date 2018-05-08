
var input = {
  arr: [1, 3, 2, 2],
  sum: 4
};

(function (input) {

  var _seen = [],
    _out = [];

  function init() {
    findPairs();

    console.log(_out);
  }

  function findPairs() {

    var i, arr = input.arr, len = arr.length, k = input.sum;

    for (i = 0; i < len; i++) {
      var target = k - arr[i];

      if (_seen.indexOf(target) < 0) {
        _seen.push(arr[i]);
      }
      else {
        _out.push([arr[i], target]);
      }

    }

  }

  init();

}(input));



