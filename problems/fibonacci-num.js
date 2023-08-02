// Q2: Fibonacci Number
// Fibonacci Series => 0,1,1,2,3,5,8,13,21,...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
/*
Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
*/

/*================ Solution 1 ============== */
// const fib = (n) => {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }

//   return arr[n];
// };

// fib(2);

/*================ Solution 2 ============== */
const fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
