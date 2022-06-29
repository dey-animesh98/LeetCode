/**
 * 
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.

Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?
 */


{


    var reverseWords = function (s) {
        s = s.trim().split(' ')


        for (let i = 0; i < s.length; i++) {
            if (s[i] == "") {
                s.splice(i, 1)
                i--
            }
        }

        let start = 0, end = s.length - 1
        while (start < end) {
            let temp = s[start]
            s[start] = s[end]
            s[end] = temp
            start++
            end--
        }

        return s.join(' ').trim()


    };
}


{
    var reverseWords = function(s) {
        return s.trim().split(" ").reverse().filter((s)=>s != "").join(" ");
      };
}

{
    var reverseWords = function (s) {
        s = s.trim().split(' ')
        for (let i = 0; i < s.length; i++) {
            if (s[i] == "") {
                s.splice(i, 1)
                i--
            }
        }
        return s
    };

    console.log(reverseWords("  Bob    Loves  Alice   "))
}

var array = [" hello", " goodbye", "", " no"].toString().replace(/\s*\,\s*/g, ",").trim().split(",");

// console.log(array)

// let a = "a  good    example"
// let b = a.replace(/\s*\,\s*/g)
// console.log(b)

const removeSpaces = str => str.replace(/\s/g, '');

// Example
// console.log(removeSpaces('hel lo wor   ld'))    // 'helloworld'

{
    var reverseWords = function (s) {
        s = s.trim().split(' ')
        let start = 0, end = s.length - 1

        while (start < end) {
            if (s[start] == "") {
                s.splice(start, 1)
                start--
            }
            if (s[end] == "") {
                s.splice(end, 1)
                end++
            }
            let temp = s[start]
            s[start] = s[end]
            s[end] = temp
            start++
            end--
        }

        return s.join(' ').trim()


    };
}