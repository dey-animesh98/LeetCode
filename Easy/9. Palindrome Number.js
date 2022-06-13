/*
9. Palindrome Number
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:
-231 <= x <= 231 - 1
 */
//--
{
    var isPalindrome = function(x) {
        if(x>=0){
          let str = x+''
         return str.split('').reverse().join('') == x
        }
      return false
    };
}

{
  var isPalindrome = function(x) {
    if(x>=0){
      let rev = ''
      let num =x
      while(num>0){
        let rem = num % 10
        rev += rem
        num = Math.floor(num/10)
      }
      return rev == x    //+rev === x ---> is same
    }
  return false
};
}