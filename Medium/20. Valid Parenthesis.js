/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'
 */





{
    var isValid = function (s) {
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        }

        if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop()
            } else {
                return false
            }
        }

        if (s[i] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop()
            } else {
                return false
            }
        }

        if (s[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};

console.log(isValid('[](){()}'))
}
//--
{
    var isValid = function(str) {
        let obj = {
            '{':'}',
            '[':']',
            '(':')'
        }
        let par=[];
        
        for(let i=0;i<str.length;i++){
            if(obj[str[i]]) par.push(obj[str[i]])
            else if(str[i]===par[par.length-1]) par.pop();
            else return false
        }
        if(par.length!==0)return false
        return true
    };
}



