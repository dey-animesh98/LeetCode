/**
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

Given a balanced string s, split it in the maximum amount of balanced strings.

Return the maximum amount of split balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 

Constraints:

1 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.
 */

//--
{
    var balancedStringSplit = function (s) {

        let countR = 0, countL = 0, pairs = 0
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "L") countL++
            if (s[i] === "R") countR++

            if (countL == countR) {
                pairs++
                countL = 0
                countR = 0
            }
        }
        return pairs
    };
}

//--
{
    var balancedStringSplit = function (s) {
        let num = 0, count = 0;
        for (let i = 0; i <= s.length; i++) {
            (s[i] === "R") ? num-- : num++;
            if (!(num)) {
                count++;
            }
        }
        return count;
    }
}