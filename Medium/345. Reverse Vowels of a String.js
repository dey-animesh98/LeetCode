/**
 * Easy

1684

1892

Add to List

Share
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 */

//--
{
    var reverseVowels = function (s) {
        const vowel = 'aeiouAEIOU';
        let l = 0;
        let r = s.length - 1;
        const arr = s.split('');
        while (l < r) {
            if (vowel.indexOf(arr[l]) === -1) {
                l++;
            }

            if (vowel.indexOf(arr[r]) === -1) {
                r--;
            }

            if (vowel.indexOf(arr[l]) !== -1 && vowel.indexOf(arr[r]) !== -1) {
                [arr[l], arr[r]] = [arr[r], arr[l]];
                l++;
                r--;
            }
        }

        return arr.join('');

    };
}