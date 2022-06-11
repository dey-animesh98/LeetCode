/**
 242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters
 */
//---
{
    const isAnagram = function(s, t) {
        let b= s.split('').sort().join('')
        let c= t.split('').sort().join('')
      return b == c
      };
}
//--Hash map
{
    const isAnagram = function(s, t) {
        const hashMap = {};
           
           for (let i = 0; i < s.length; i++){
             hashMap[s[i]] = hashMap[s[i]] ? hashMap[s[i]] + 1 : 1;
           }
           for (let j = 0; j < t.length; j++) {
             hashMap[t[j]] = hashMap[t[j]] ? hashMap[t[j]] - 1 : -1;
           }
           return Object.values(hashMap).every(value => !value)
       };
       console.log(isAnagram("anagram", "nagaram"))
    //    console.log(isAnagram("rat", "car"))

}
//-----Bonus-------//
//Count of letters in a word using Hash Map
{
    const countLetters = function(s) {
        const hashMap = {};
        for (let i = 0; i < s.length; i++){
          if(hashMap[s[i]]){
            hashMap[s[i]] += 1        //Same code using ternary operator >> hashMap[s[i]] = hashMap[s[i]] ? hashMap[s[i]] + 1 : 1;
          }else{
            hashMap[s[i]] = 1
          }
          }
          return hashMap
    }
    console.log(countLetters('javascript'))
}
