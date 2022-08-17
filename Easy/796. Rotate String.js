/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
 */

//--
{
    var rotateString = function (s, goal) {
        if (s.length !== goal.length) false
        if (s.length == 0 && goal.length == 0) return false

        s = s + s
        return s.includes(goal)

    };
    // console.log(rotateString('abcde', 'cdeab'))
}

{
    const rotateString2 = function (s, goal) {
        if (s.length !== goal.length) return false
        if (s.length == 0 && goal.length == 0) return false

        s = s + s
        let i = 0, j = 0
        while (i < s.length) {
            if (s[i] === goal[j]) {
                while (s[i] === goal[j]) {
                    j++
                    i++
                    if (j === goal.length) return true
                }

            } else {
                j = 0
                i++
            }
        }
        return false
    };
    console.log(rotateString2('aa', 'a'))
}
/**
 * "vcuszhlbtpmksjleuchmjffufrwpiddgyynfujnqblngzoogzg"
"fufrwpiddgyynfujnqblngzoogzgvcuszhlbtpmksjleuchmjf"
 */

{
    var rotateString = function (s, goal) {
        for (let char of s) {
            s = s.slice(1) + s.slice(0, 1);
            if (s === goal) return true;
        }
        return false;
    }

}

{
    var rotateString = function(s, goal) {
        for(let i = 0; i < s.length; i++) {
            if (s.slice(i) + s.slice(0,i) === goal) return true;
        }
        return false;
    };
}