/**
 * DATE: 06-06-2022
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

//  My Sol:
//----------------------------------------------------------------------------
{
const isPalindrome = function(s) {
    if(s.trim().length===0){
        return true
    }
    const rep = s.replace(/[^a-zA-Z0-9]/g, '')
    const lowerCase =rep.split(' ').join('').toLowerCase()
    const rev = lowerCase.split('').reverse().join('')
    
    if(lowerCase === rev){
        return true
    }else{
        return false
    }
    }
    
    console.log(isPalindrome('ab_a'))
    //Inputs-'0P'
}
//-------------------------------------------------------Other Methods
//1.
{
    const isPalindrome = function(s) {
    s = (s.replace(/([^0-9a-zA-Z])/g, "")).trim().toLowerCase()
//   length of string
  if(s.length === 0) return true
  let j = s.length - 1
  for (let i = 0; i < j / 2; i++) {
    if (s[i] !== s[j - i]) {
      return false
    }
  }
  return true
};

}

// 2.--------------------------------------------------------------------
{
    const isPalindrome = function(s) {
        const forward = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')//.replace(/\s+/g, '');
        const reverse = forward.split('').reverse().join('');    
    
        return forward === reverse;
    };
    
    // console.log(isPalindrome('ab_a')
}

//3.-------------------------------------------------------------
{
    const isPalindrome = function(s) {
        return (s.replace(/[^a-z0-9]/gi, '').toLowerCase()=== s.replace(/[^a-z0-9]/gi, '').toLowerCase().split("").reverse().join("")) ? true : false
        };
}

//4. --------------------------------------------------ASCII
{
    const isPalindrome = function(s) {
        return s
            .toLowerCase()
            .split('')
            .filter((c) => {
                const code = c.charCodeAt(0);
                return (code >= 97 && code <= 122) || (code >= 48 && code <= 57);
            })
            .reduce((res, x, i, str) => {
                return res && str[i] === str[str.length - 1 - i];
            }, true);
    };
}