// Q1: Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

/*
Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
*/

const isPalindrome = (x) => {
  if (x < 0) return false;

  return x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(-1));

// 121 => "121" => ["1","2","1"] => ["1","2","3"] => "121" => 121
