/**
 * 
 * The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1.

      Examples:
        4! = 4 × 3 × 2 × 1 = 24
        7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
        1! = 1
 */

function factorial(x) {
  if (x < 1) return 0;
  if (x === 1) return 1;
  return x * factorial(x - 1);
}

console.log(factorial(4)); // 24
