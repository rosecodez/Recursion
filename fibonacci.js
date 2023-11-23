// Using iteration:

// write a function "fibs" which takes a number and returns
// an array containing that many numbers from the Fibonacci sequence

// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

//  All the next numbers of the Fibonacci series in JavaScript
//  can be generated using the sum of the last two numbers:

//  fib(1) = 0
//  fib(2) = 1
//  fib(3) = fib(2) + fib(1)
//  fib(4) = fib(3) + fib(2)
//  fib(5) = fib(4) + fib(3)
//  ...
//  fib(n) = fib(n-1) + fib(n-2)

// 1. Declare variables and one to store the first 2 nums
// `n` is the value of the term that needs to be calculated
// `z` will store the sum of the previous two numbers
// `x` and `y` are the numbers that wil track the number of fibonacci

// 2. Initialize variables x =1, y=1, i=2
// 3. Take n from the user
// 4. Display the value of x and y
// 5. Repeat the process, add the previous 2 terms to generate the fibonacci series
// 6. Stop the process as i becomes equivalent to n

// Loop:
function fibs(n) {
  const answer = [];
  let x = 0;
  let y = 1;
  let z;

  answer.push(x);
  answer.push(y);

  for (let i = 2; i < n; i++) {
    z = x + y;
    x = y;
    y = z;

    answer.push(z);
  }
  return answer;
}
const n = 8;
answer = fibs(n);
console.log(answer);
