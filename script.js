// Print odds 1-20
console.log("Odd numbers 1 to 20 Problem");
console.log("-------------------------");
for (var odd = 1; odd <= 20; odd += 2) {
  console.log(odd);
}

// Decreasing Multiple of 3
console.log("\nDecreasing Multiple of 3 Problem");
console.log("-------------------------------");
for (var divisible = 100; divisible >= 0; divisible -= 1) {
  if (divisible % 3 == 0) {
    console.log(divisible);
  }
}

// Print the sequence
console.log("\nPrint the sequence Problem");
console.log("-------------------------");
var sequence = [4, 2.5, 1, -0.5, -2, -3.5];
for (var idx in sequence) {
  console.log(sequence[idx]);
}
//Sigma
console.log("\nSigma Problem");
console.log("-------------------------");
var sigma = 0;
for (var i = 0; i <= 100; i++) {
  sigma += i;
}
console.log(sigma);
// Factorial
console.log("\nFactorial Problem");
console.log("-------------------------");
function factorial(number) {
  if (number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log(factorial(4));
