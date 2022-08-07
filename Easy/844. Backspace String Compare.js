/**
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 

Follow up: Can you solve it in O(n) time and O(1) space?
 */

//--
{
    var backspaceCompare = function(s, t) {
        let stack1 = [], stack2 = []
    
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== '#') {
                stack1.push(s[i])
            } else if (stack1.length && s[i] == '#') {
                stack1.pop()
            }
        }
    
        for (let j = 0; j < t.length; j++) {
            if (t[j] !== '#') {
                stack2.push(t[j])
            } else if (stack2.length && t[j] == '#') {
                stack2.pop()
            }
        }
    
        return stack1.join('') == stack2.join('')
    }
}