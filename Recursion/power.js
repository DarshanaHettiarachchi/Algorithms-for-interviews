/**
 * 
 * example: 2 ^ 4 = 2 × 2 × 2 × 2 = 16
    the power is 4, 2 is the base: "2 to the power 4 is 16"
    or we can say the power is the result of 16: "the 4th power of 2 is 16"
 * 
 * 
 */

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 4)); //16
console.log(power(5, 2)); //25
