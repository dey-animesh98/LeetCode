/**
 * Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
 */
//--
{

    var longestValidParentheses = function (s) {

        let stack = [], curr = 0, max = 0

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(s[i])
            }

            if (s[i] === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                    if (stack.length === 0) {
                        curr += 2
                    } else {
                        curr = 0
                    }

                } else {
                    curr = 0
                }
                if (curr > max) {
                    max = curr
                }
            }
        }

        return max
    };

    // console.log(longestValidParentheses('()()'))
}


{

    const longestValidParentheses2 = function (s) {
        const stack = [-1]
        let max = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(')
                stack.push(i)
            else {
                stack.pop();
                if (stack.length >= 1)
                    max = Math.max(max, i - stack[stack.length-1]);
                else
                    stack.push(i);
            }
        }
        return max;
    };

    console.log(longestValidParentheses2(')()()(())(()'))
}