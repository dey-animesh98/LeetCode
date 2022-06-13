/*
258. Add Digits
Easy

2517

1653

Add to List

Share
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0
 

Constraints:

0 <= num <= 231 - 1
*/
{//Recursion
    const addDigits = function (num) {
        if (num < 10) return num
        let sum = 0
        while (num > 0) {
            let rem = num % 10
            sum += rem
            num = Math.floor(num / 10)
        }
        return addDigits(sum)
    };
    console.log(addDigits(45454564))

}
{//O(1)

    const addDigits = function (num) {
        return num == 0 ? 0 : num % 9 === 0 ? 9 : num % 9
    };
    console.log(addDigits(11))

}